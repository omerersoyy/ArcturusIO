"owner"
import { User } from "./User"
export type Comment = {
    owner: User,
    id: string,
    message: string,
    publishDate: string
}