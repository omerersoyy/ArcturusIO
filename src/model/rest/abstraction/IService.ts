import { ApiResponse, ApisauceInstance, HEADERS } from "apisauce";
import { RequestBody } from "../../types/RequestBody";
import { RequestMethod } from "../../types/RequestMethod";
import { IApi } from "./IApi";

export interface IService {
    api: IApi,
    serviceName: string,
    addHeader?( header: HEADERS ): ApisauceInstance
    request<T, U, V>(method: RequestMethod, path:string, body?: RequestBody<T>): Promise<ApiResponse<U, V>>
}