export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
    videos: Video[];
}

export type Video = {
    title: string;
    thumbnail: string;
    description: string;
    duration: number;
    youtubeid: string;
    date: string;
    id: string;
    fav: boolean;
}