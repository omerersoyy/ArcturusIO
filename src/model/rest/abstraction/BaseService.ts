import { ApisauceInstance } from "apisauce";
import { Api } from "../../types/Api";
import { IService } from "./IService";
import { ServiceFactory } from "./ServiceFactory";

export abstract class BaseService implements IService {
    private _serviceInstance: ApisauceInstance
    private _api: Api
    private _serviceName: string

    constructor(api: Api, serviceName: string) {
        this._api = api
        this._serviceName = serviceName
        this._serviceInstance = ServiceFactory.getServiceInstance(serviceName, api)
    }
    
    public get serviceName() : string {
        return this._serviceName
    }
    
    public set serviceName(serviceName : string) {
        this._serviceName = serviceName;
    }
    
    public get api(): Api {
        return this._api
    }

    public set api(api: Api) {
        this._api = api
    }

    public get serviceInstance(): ApisauceInstance {
        return this._serviceInstance
    }

    public set serviceInstance(instance: ApisauceInstance) {
        this._serviceInstance = instance
    }

}