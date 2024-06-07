import {FreshContext, Handlers, PageProps, RouteConfig} from "$fresh/server.ts";
import jwt from "jsonwebtoken";
import Login from "../components/Login.tsx";
import { setCookie } from "$std/http/cookie.ts";
import type { User, Video } from "../types.ts"
import VideoList from "../components/VideoList.tsx";


type State = {
    id: string;
    name: string;
    email: string;
};

type Data = {
    videos: Video[];
    userid: string;
}

export const handler: Handlers<Data, State> = {

    GET: async (req:Request, ctx:FreshContext<State,Data>) => {

        const userid = ctx.state.id;

        const API_URL = Deno.env.get("API_URL");
        if (!API_URL) {
            throw new Error("API_URL is not set in the environment");
        }

        const response = await fetch(`${API_URL}/videos/${userid}`);

        if (response.status !== 200) {
            return ctx.render(
                {
                    videos : [], 
                    userid : "",
                });
        }

        const videos: Video[] = await response.json();

        return ctx.render({videos, userid});
    },
};

const Page = (props:PageProps<Data>) => (
    <VideoList videos={props.data.videos} />
);

export default Page;



