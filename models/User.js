const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
});
