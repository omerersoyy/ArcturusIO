import { HEADERS } from "apisauce";
import { KeyValue } from "./KeyValue";

export type Api = {
    baseUrl: string,
    headers: KeyValue<string, string>[]
}