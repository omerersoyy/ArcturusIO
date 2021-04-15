import { ApiResponse } from "apisauce";
import { Api } from "../../types/Api";
import { BaseService } from "../abstraction/BaseService";

export class DummyApiService extends BaseService {

    constructor(api: Api, service: string) {
        super(api, service)
    }

    getUsers(page: number, limit: number): Promise<ApiResponse<unknown, unknown>> {
        return this.serviceInstance.get(`/user?limit=${limit}&page=${page}`)
    }

    getSingleUser(userId: string): Promise<ApiResponse<unknown, unknown>> {
        return this.serviceInstance.get(`/user/${userId}`)
    }

    getUserPosts(page: number, limit: number, userId: string): Promise<ApiResponse<unknown, unknown>> {
        return this.serviceInstance.get(`/user/${userId}/post?limit=${limit}&page=${page}`)
    }

    getPosts(page: number, limit: number): Promise<ApiResponse<unknown, unknown>> {
        return this.serviceInstance.get(`/post?limit=${limit}&page=${page}`)
    }

    getSinglePost(postId: number): Promise<ApiResponse<unknown, unknown>> {
        return this.serviceInstance.get(`/post${postId}`)
    }

    getComments(postId: number): Promise<ApiResponse<unknown, unknown>> {
        return this.serviceInstance.get(`/post${postId}/comment`)
    }

    getTags(page: number, limit: number): Promise<ApiResponse<unknown, unknown>> {
        return this.serviceInstance.get(`/tag?limit=${limit}&page=${page}`)
    }

    getPostsByTag(page: number, limit: number, tagTitle: string): Promise<ApiResponse<unknown, unknown>> {
        return this.serviceInstance.get(`/tag/${tagTitle}/post?limit=${limit}&page=${page}`)
    }

}