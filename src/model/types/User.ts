import { Location } from "./Location";

export type User = {
    id: string,
    email: string,
    firstName: string,
    lastName: string,
    picture: string,
    title: string,
    gender?: string,
    registerDate?: string,
    dateOfBirth?: string,
    phone?: string,
    location?: Location
}