import { User } from "./User";

export type Post = {
    owner: User,
    id: string,
    image: string,
    publishData: string,
    text: string,
    link: string,
    likes: number,
    tags: Array<string>
}