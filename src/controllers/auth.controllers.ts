import { Request, Response } from "express";
import { User } from "../models/User";
import argon2 from "argon2";
import { generateAccessToken, generateRefreshToken } from "../utils/jwt";
import jwt from "jsonwebtoken";


export const signUp = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const checkUser = await User.findOne({ email: email })

        if (checkUser) {
            res.send('user exist');
            return 
        }
        const hashedPassword = await argon2.hash(password);
        const user = await User.create({
            email: email,
            password: hashedPassword
        })
        res.send(`sign Up Compeleted`)
    } catch (err) {
        console.log(err)
        return
    }

}

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body
    const user = await User.findOne({ email: email })
    if (!user) {
        res.send("Frist one sign up please")
        return;
    }
    const isValid = await argon2.verify(
        user.password!,
        password
    );
    if (!isValid) {
        return res.status(401).json({
            message: "Invalid password",
        });
    }
    const accessToken = generateAccessToken(user._id.toString());
    const refreshToken = generateRefreshToken(user._id.toString());
    user.refreshToken = refreshToken
    await user.save()
    return res.json({
        accessToken: accessToken
    })
}


export const refreshToken = async (req: Request, res: Response) => {
    const token = req.cookies.refreshToken
    if (!token) {
        return res.status(401).json({
            Message: 'no refresh token'
        })
    }

    try {
        const decode = jwt.verify(
            token, process.env.JWT_REFRESH_SECRET as string
        ) as { userId: string }
        const user = await User.findById(decode.userId)
        if (!user) {
            return res.status(404).json({
                Message: 'user not found'
            })
        }
        if (user.refreshToken !== token) {
            return res.status(403).json({
                message: "Invalid refresh token",
            });
        }
        const newAccessToken = generateAccessToken(user.id.toString())
        return res.json({
            accessToken: newAccessToken
        })
    } catch (err) {
        return res.status(403).json({
            message: "Refresh token expired or invalid",
        });
    }
}       