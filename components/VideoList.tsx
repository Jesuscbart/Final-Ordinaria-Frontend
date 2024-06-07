import { FunctionComponent } from "preact";
import { Video } from "../types.ts"

type Props = {
    video: Video;
};

const VideoList: FunctionComponent<Props> = ({video}) => (

    <div class="video-page-container">
        <h1 class="video-list-title">Curso Deno Fresh</h1>
            
            
    </div>

);

export default VideoList;