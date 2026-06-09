import mongoose, { Schema } from "mongoose";


const feedbackSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, require: true, ref: 'User' },
    featureId:{type: mongoose.Schema.Types.ObjectId, require: true, ref: 'Feature'},
    tile: { type: String, require: true },
    body: { type: String, require: true },
    image: { type: String, default: null },
}, { timestamps: true },
)
const User = mongoose.model('User', feedbackSchema)
