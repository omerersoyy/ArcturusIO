import { ApisauceInstance, HEADERS } from "apisauce";
import { Api } from "../../types/Api";
import { KeyValue } from "../../types/KeyValue";

export interface IService {
    api: Api,
    serviceName: string,
    addHeader?( header: HEADERS ): ApisauceInstance
}