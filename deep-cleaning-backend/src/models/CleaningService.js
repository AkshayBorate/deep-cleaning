// models/CleaningService.js
const mongoose = require("mongoose");

const cleaningServiceSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      enum: ["house", "room", "sofa"],
      required: true,
    },
    type: String, 
    service: String, 
    furnished: Number, 
    unfurnished: Number, 
    price: Number, 
    description: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("CleaningService", cleaningServiceSchema);
