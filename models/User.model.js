const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: [true, "Username already in use."],
      lowercase: true,
    },
    phone: {
      type: String,
      required: [true, "A phone number is required."],
      unique: [true, "This phone number is already in use."],
      trim: true,
    },
    gender: {
      type: String,
      required: [true, "Please, select your gender."],
      enum: ["Male", "Female", "Non-binary"],
    },
    dateOfBirth: {
      type: Date,
      required: [true, "Date of birth not specified."],
    },
    // location: {
    //   type: String,
    //   required: [true, "Location not specified."],
    // },
    genderSought: [
      {
        type: String,
        required: [true, "Select the gender you're looking for."],
        enum: ["Male", "Female", "Non-binary"],
      },
    ],
    autoBio: {
      type: String,
      required: [true, "Auto-bio not recorded."],
    },
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    matches: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

const User = model("User", userSchema);

module.exports = User;
