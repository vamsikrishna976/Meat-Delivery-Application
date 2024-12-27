import UserData from "../../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import Token from "../../models/Token.js";

import crypto from "crypto";
import VerificationToken from "../../models/Token/TokenModel.js";

export const isValidObjectId = (id) => /^[0-9a-f]{24}$/i.test(id);

var secretKey = "secret";
var accessTokenExpiration = "15m";
var refreshTokenExpiration = "30d";

export const refreshToken = (req, res) => {
  const { refreshToken } = req.body;

  // Verify the refresh token
  jwt.verify(refreshToken, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid refresh token" });
    }

    // Generate a new access token
    const accessToken = jwt.sign({ userId: decoded.userId }, secretKey, {
      expiresIn: accessTokenExpiration,
    });

    res.json({ accessToken });
  });
};

export const UserLogin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Username and Password are required." });
  }

  try {
    const user = await UserData.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User does not exist" });
    }

    const passwordMatch = bcrypt.compareSync(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Assuming you have user information that you want to include in the token.
    const userPayload = {
      userId: user._id,
      email: user.email,
      // Add any other user-related data you want to include.
    };

    // Sign the token with the payload and secret key.
    const token = jwt.sign(userPayload, secretKey, {
      expiresIn: accessTokenExpiration,
    });

    return res.status(200).json({
      message: "User Logged In Successfully",
      user,
      status: true,
      token,
      // refreshToken,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const Register = async (req, res) => {
  try {
    const { email, password, first_name, last_name } = req.body;

    const userExist = await UserData.exists({ email: email });
    if (userExist) {
      return res
        .status(200)
        .json({ message: "User already exists", status: false });
    }

    const saltRounds = 8;
    const encryptPassword = await bcrypt.hash(password, saltRounds);

    const lowercaseEmail = email.toLowerCase();

    // Check if userType is "Admin" and set the isAdmin field accordingly

    const user = new UserData({
      email: lowercaseEmail,
      password: encryptPassword,
      first_name,
      last_name,
    });

    const dataRegister = await user.save();

    // Generate a verification token
    const verificationToken = crypto.randomBytes(32).toString("hex");
    const bcryptSalt = 10;
    const hash = await bcrypt.hash(verificationToken, Number(bcryptSalt));

    // Save the verification token in the database
    const ktoken = await new VerificationToken({
      userId: dataRegister._id,
      token: hash,
      createdAt: Date.now(),
    }).save();

    // Return the immediate response to the user
    return res.status(200).json({
      message: "User Created Successfully",
      status: true,
      data: dataRegister,
    });
  } catch (error) {
    console.error("Error:", error);
    return res
      .status(500)
      .json({ message: "Internal Server Error", status: false });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await UserData.find({ isDeleted: false });

    return res.status(200).json({
      message: "Accounts retrieved successfully",
      status: true,
      result: user,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "An error occurred while retrieving accounts",
      status: false,
    });
  }
};

export const getUsers = async (req, res) => {
  try {
    const contacts = await UserData.find();

    return res.status(200).json({
      message: "getUsers retrieved successfully",
      status: true,
      result: contacts,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "An error occurred while retrieving getUsers",
      status: false,
    });
  }
};

export const GetUserById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        message: "Id is required",
        status: false,
      });
    }

    if (!isValidObjectId(id)) {
      return res.status(400).json({
        message: "Valid id is required",
        status: false,
      });
    }

    const partner = await UserData.findById({ _id: id });

    if (partner?.length === 0) {
      return res.status(404).json({
        message: "User not found",
        status: false,
      });
    }

    return res.status(200).json({
      message: "User found successfully",
      status: true,
      result: partner,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "An error occurred while getting the Partners",
      status: false,
    });
  }
};

export default {
  UserLogin,
  Register,
  getUser,
};
