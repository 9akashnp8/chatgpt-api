import { Request, Response } from "express";
import getAiResponse from "../../chatpgt/index.js";

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
    const response = await getAiResponse(body.prompt);
    res.send(response)
}