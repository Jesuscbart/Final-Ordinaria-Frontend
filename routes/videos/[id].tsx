/*
import {FreshContext, Handlers, PageProps, RouteConfig} from "$fresh/server.ts";
import jwt from "jsonwebtoken";
import type { User, Video } from "../types.ts"


type State = {
    id: string;
    name: string;
    email: string;
};

type Data = {
    video: Video;
    userid: string;
}

export const handler: Handlers<Data, State> = {

    GET: async (req:Request, ctx:FreshContext<State,Data>) => {

        const userid = ctx.state.id;
        const videoid = ctx.data.video;

        const 

        const API_URL = Deno.env.get("API_URL");
        if (!API_URL) {
            throw new Error("API_URL is not set in the environment");
        }

        const response = await fetch(`${API_URL}/videos/${userid}/${videoid}`);

        if (response.status !== 200) {
            return ctx.render(
                {
                    video : "", 
                    userid : "",
                });
        }

        const videos: Video[] = await response.json();

        //return ctx.render({videoid, userid});
    },
};

/*
const Page = (props:PageProps<Data>) => (

);

export default Page;

*/


