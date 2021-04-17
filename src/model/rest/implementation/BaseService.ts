import { ApiResponse, ApisauceInstance } from "apisauce";
import { IApi } from "../abstraction/IApi";
import { RequestBody } from "../../types/RequestBody";
import { RequestMethod } from "../../types/RequestMethod";
import { IService } from "../abstraction/IService";
import { ServiceFactory } from "./ServiceFactory";

export abstract class BaseService implements IService {
    private _serviceInstance: ApisauceInstance
    private _api: IApi
    private _serviceName: string

    constructor(api: IApi, serviceName: string) {
        this._api = api
        this._serviceName = serviceName
        this._serviceInstance = ServiceFactory.getServiceInstance(serviceName, api)
    }

    request<T, U, V>(method: RequestMethod, path:string, body?: RequestBody<T>): Promise<ApiResponse<U, V>> {
        switch(method) {
            case RequestMethod.GET:
                return this.serviceInstance.get(path)
            case RequestMethod.POST:
                /**
                 * since we don't have any methods but GET in dummyapi.io
                 * we won't use this
                 * but you got the idea.
                 */
                return this.serviceInstance.post(path, body)
                /**
                 * other cases for put, patch and delete
                 */
            default:
                return this.serviceInstance.get(path)
        }
    }


    public get serviceName() : string {
        return this._serviceName
    }
    
    public set serviceName(serviceName : string) {
        this._serviceName = serviceName;
    }
    
    public set api(api: IApi) {
        this._api = api
    }

    public get serviceInstance(): ApisauceInstance {
        return this._serviceInstance
    }

    public set serviceInstance(instance: ApisauceInstance) {
        this._serviceInstance = instance
    }

}