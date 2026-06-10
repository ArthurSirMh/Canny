import mongoose, { Schema } from "mongoose";

const otpSchema = new mongoose.Schema({
    email: { type: String, ref: 'User', required: true },
    otp: { type: String, required: true },
    verified: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true },
)
export const Otp = mongoose.model('Otp', otpSchema)
