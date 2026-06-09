import mongoose, { Schema } from "mongoose";


const featuresSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, require: true, ref: 'User' },
    tile: { type: String, require: true },
    body: { type: String, require: true },
    image: { type: String, default:null },
}, { timestamps: true },
)
export const Feature = mongoose.model('User', featuresSchema)
