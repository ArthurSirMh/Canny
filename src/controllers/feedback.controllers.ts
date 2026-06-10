import { Request, Response } from "express";
import { Feature } from "../models/Feature";
import { registry } from "zod/v4/core";
import { Feedback } from "../models/Feedback";



export const createFeedback = async (req: Request, res: Response) => {
    try {
        const checkFeature = await Feature.findById(req.body.featureId)
        const userId = (req as any).user.userId;
        if (!checkFeature) {
            return res.send('feature not found')
        }
        const checkVoteExsit = await Feedback.findOne({
            featureId: checkFeature.id,
            userId: userId
        })
        if (checkVoteExsit) {
            return res.send('already voted')
        }
        await Feedback.create({
            userId: userId,
            featureId: checkFeature.id,
            vote: true
        })
        return res.send('send vote compeleted')
    } catch(err) { 
        console.log(err)
        return res.send('server Error')
    }
}

export const deleteFeedback = async (req: Request, res: Response) => {
    try {
        const checkFeature = await Feature.findById(req.body.featureId)
        const userId = (req as any).user.userId;
        if (!checkFeature) {
            return res.send('feature not found')
        }
        const checkVoteExsit = await Feedback.findOne({
            featureId: checkFeature.id,
            userId: userId
        })
        if (!checkVoteExsit) {
            return res.send('nothing to vote')
        }
        await Feedback.deleteOne({
            userId: userId,
            featureId: checkFeature.id,
        })
        return res.send('vote deleted successfully')
    } catch {
        return res.send('invalid data')
    }

}