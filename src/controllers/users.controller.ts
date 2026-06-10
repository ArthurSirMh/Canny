import { Request, Response } from "express";
import { User } from "../models/User";
import argon2 from "argon2";
import { send } from "node:process";


export const createUser = async (req: Request, res: Response) => {
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