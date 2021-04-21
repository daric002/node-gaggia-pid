import { Response, Request } from "express";

export default function hello(request: Request, response: Response): Response {
    return response.send("hello world");
}
