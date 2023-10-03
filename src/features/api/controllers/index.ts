import { Request, Response } from "express";
import { browserInstance } from "../../../app.js";

type UserPrompt = {
    prompt: string
}

type QueryParams = {
    mock?: string
}

export async function conversationController(
    req: Request<{}, any, UserPrompt, QueryParams>,
    res: Response
) {
    if (req.query.mock) res.send("mock response")
    const { body } = req;
    const response = await browserInstance
        .sendMessage(body.prompt);
    res.send(response)
}