import jwt from "jsonwebtoken";
import UserData from "../../models/userModel.js";
import mongoose from "mongoose";

export const isValidObjectId = function (value) {
  return mongoose.Types.ObjectId.isValid(value);
};

export const authentication = async (req, res, next) => {
  try {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.split(" ")[0] === "Bearer"
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res
        .status(400)
        .send({ status: false, message: "Token is missing." });
    }

    jwt.verify(token, "secret", (err, decoded) => {
      if (err) {
        return res
          .status(401)
          .send({ status: false, message: "Invalid token" });
      } else {
        if (Date.now() > decoded.exp * 1000) {
          return res
            .status(401)
            .send({ status: false, message: "Token is expired" });
        }

        // console.log(decoded)
        req.userId = decoded.id;

        req.email = decoded.email;

        next();
      }
    });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

export const Authorization = async (req, res, next) => {
  try {
    let token = req.headers.authorization;

    if (!token) {
      return res
        .status(401)
        .json({ status: false, message: "No token provided" });
    }

    token = token.replace("Bearer ", ""); // Remove the 'Bearer ' prefix from the token

    jwt.verify(token, "secret", async (err, decoded) => {
      if (err) {
        return res
          .status(401)
          .json({ status: false, message: "Invalid token" });
      }

      let tokenUserId = decoded.id;
      let userId = req.params.userId;

      if (!isValidObjectId(userId)) {
        return res
          .status(400)
          .json({ status: false, message: "userId is not valid" });
      }

      //! Check if the user id is present in the decoded token
      let user = await UserData.findById(userId);
      if (!user) {
        return res
          .status(404)
          .json({ status: false, message: "User does not exist" });
      }

      if (userId !== tokenUserId) {
        return res
          .status(403)
          .json({ status: false, message: "Not Authorized" });
      }

      req.userId = tokenUserId; // Add the userId to the request object
      next();
    });
  } catch (error) {
    return res.status(500).json({ status: false, message: error.message });
  }
};


export default { authentication, Authorization };

