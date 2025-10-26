import { NextFunction, Request, Response } from "express";
import rateLimit from "../config/upstash.js";

const rateLimiter = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {success} = await rateLimit.limit("my-rate-limit"); //TODO: replace with user ID

        if (!success) {
            return res.status(429).json({
                message: "Too many requests.",
            })
        }

        next()
    } catch (error) {
        console.log("Rate limit error.", error);
        next(error);
    }
}

export default rateLimiter;