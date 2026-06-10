import mongoose, { Schema } from "mongoose";
import { required } from "zod/mini";


const feedbackSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    featureId:{type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Feature'},
    vote: { type: Boolean, require: true },
}, { timestamps: true },
)
export const Feedback = mongoose.model('Feedback', feedbackSchema)
