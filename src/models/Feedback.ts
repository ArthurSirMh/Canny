import mongoose, { Schema } from "mongoose";


const feedbackSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, require: true, ref: 'User' },
    featureId:{type: mongoose.Schema.Types.ObjectId, require: true, ref: 'Feature'},
    vote: { type: Boolean, require: true },
}, { timestamps: true },
)
export const User = mongoose.model('User', feedbackSchema)
