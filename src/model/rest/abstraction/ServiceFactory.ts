import { ApisauceInstance, create } from "apisauce";
import { Api } from "../../types/Api";

export class ServiceFactory {

    private static services: Map<string, ApisauceInstance> = new Map()
    private static _serviceInstance: ApisauceInstance | undefined

    static getServiceInstance(service: string, api: Api): ApisauceInstance {
        
        this._serviceInstance = this.services.get(service)

        if(!this._serviceInstance) {
            this._serviceInstance = create({
                baseURL: api.baseUrl
            })

            api.headers.forEach((header, _idx) => {
                if(this._serviceInstance) {
                    this._serviceInstance.headers[header.key] = header.value
                }
            }) 
            
            this.services.set(service, this._serviceInstance)
        }

        return this._serviceInstance
    }
}