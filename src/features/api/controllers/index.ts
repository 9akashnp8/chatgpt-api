import { Request, Response } from "express";
import getAiResponse from "../../chatpgt/index.js";

type UserPrompt = {
    prompt: string
}

export async function conversationController(
    req: Request<{}, any, UserPrompt>,
    res: Response
) {
    const { body } = req;
    const response = await getAiResponse(body.prompt);
    res.send(response)
}