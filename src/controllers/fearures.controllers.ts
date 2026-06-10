import { Request, Response } from "express"
import { User } from "../models/User";
import { send } from "node:process";
import { Feature } from "../models/Feature";



export const createFeature = async (req: Request, res: Response) => {
    const userId = (req as any).user.userId;
    try{
       const fearure =  await Feature.create({
            userId : userId,
            title : req.body.title,
            text : req.body.text,
            image : req.body.image
        })
        const s = await Feature.findById(fearure.id)
        return res.send(s)
    }catch{}
    
}