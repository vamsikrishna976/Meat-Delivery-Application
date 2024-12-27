import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { Schema } from "mongoose";

const userDataSchema = new Schema(
  {
    first_name: {
      type: String,
      uppercase: true,
    },

    last_name: {
      type: String,
      uppercase: true,
    },

    email: {
      type: String,
      uppercase: true,
      unique: true,
      required: true,
    },

    password: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const UserData = mongoose.model("userData", userDataSchema);
export default UserData;
