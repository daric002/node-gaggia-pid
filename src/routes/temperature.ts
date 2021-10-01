import { Response, Request } from "express";
import { getAsync } from "../util/db";

export default async function temperature(
    request: Request,
    response: Response
): Promise<Response> {
    const temperature = await getAsync("temperature_goal");
    return response.send(temperature);
}
