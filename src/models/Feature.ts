import mongoose, { Schema } from "mongoose";

const featuresSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    title: { type: String, required: true },
    text: { type: String, required: true },
    image: { type: String, default:null },
}, { timestamps: true },
)
export const Feature = mongoose.model('Feature', featuresSchema)
