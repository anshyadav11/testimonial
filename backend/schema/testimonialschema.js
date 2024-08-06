import mongoose from "mongoose";
const testimonialSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    review: {
      type: String,
      required: true,
    },
  });

const testimonial=mongoose.model("testimonial",testimonialSchema);

export default testimonial;
