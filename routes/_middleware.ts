import {FreshContext} from "$fresh/server.ts";
import jwt from "jsonwebtoken";
import { getCookies } from "$std/http/cookie.ts";


type State = {
    email: string;
    name: string;
    id: string;
}

export async function handler(req: Request, ctx: FreshContext<State>) {

    if(ctx.destination !== "route") {
        const resp = await ctx.next();
        return resp;
    }

    if (ctx.route === "/login" || ctx.route === "/register") {
        const resp = await ctx.next();
        return resp;
    }


    const { auth } = getCookies(req.headers);

    if (!auth) {
        return new Response("", {
            status: 307,
            headers: { location: "/login"},
        });
    }

    const payload = jwt.verify(auth, Deno.env.get("JWT_SECRET"));

    if (!payload) {
        return new Response("", {
            status: 307,
            headers: { location: "/login"},
        });
    }

    ctx.state.email = payload.email;
    ctx.state.id = payload.id;
    ctx.state.name = payload.name;

    const resp = await ctx.next();

    return resp;
}