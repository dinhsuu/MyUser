import mongoose from "mongoose";
const { Schema } = mongoose;

const studentSchema = new Schema({
  birthday: {
    type: Date,
    require: true,
  },
  address: {
    type: String,
    require: true,
    unique: true,
  },
});

export const Student = mongoose.model("Student", studentSchema);
