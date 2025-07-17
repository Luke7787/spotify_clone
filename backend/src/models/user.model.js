import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    clerkId: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt
  }
);

export const User = mongoose.model("User", userSchema); // Hey MongoDB, here’s what a user looks like — now give me a tool to manage users.