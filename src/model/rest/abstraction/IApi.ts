import { KeyValue } from "../../types/KeyValue";

export interface IApi {
    baseUrl: string,
    headers: KeyValue<string, string>[]
}