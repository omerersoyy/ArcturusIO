import { ApiResponse } from "apisauce";
import { IApi } from "../abstraction/IApi";
import { RequestMethod } from "../../types/RequestMethod";
import { BaseService } from "./BaseService";

export class DummyApiService extends BaseService {
    
    constructor(api: IApi, service: string) {
        super(api, service)
    }

    getUsers(page: number, limit: number): Promise<ApiResponse<unknown, unknown>> {
        return this.request(RequestMethod.GET, `/user?limit=${limit}&page=${page}`)
    }

    getSingleUser(userId: string): Promise<ApiResponse<unknown, unknown>> {
        return this.request(RequestMethod.GET, `/user/${userId}`)
    }

    getUserPosts(page: number, limit: number, userId: string): Promise<ApiResponse<unknown, unknown>> {
        return this.request(RequestMethod.GET, `/user/${userId}/post?limit=${limit}&page=${page}`)
    }

    getPosts(page: number, limit: number): Promise<ApiResponse<unknown, unknown>> {
        return this.request(RequestMethod.GET, `/post?limit=${limit}&page=${page}`)
    }

    getSinglePost(postId: number): Promise<ApiResponse<unknown, unknown>> {
        return this.request(RequestMethod.GET, `/post${postId}`)
    }

    getComments(postId: number): Promise<ApiResponse<unknown, unknown>> {
        return this.request(RequestMethod.GET, `/post${postId}/comment`)
    }

    getTags(page: number, limit: number): Promise<ApiResponse<unknown, unknown>> {
        return this.request(RequestMethod.GET, `/tag?limit=${limit}&page=${page}`)
    }

    getPostsByTag(page: number, limit: number, tagTitle: string): Promise<ApiResponse<unknown, unknown>> {
        return this.request(RequestMethod.GET, `/tag/${tagTitle}/post?limit=${limit}&page=${page}`)
    }

}