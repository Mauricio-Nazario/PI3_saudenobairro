import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import asyncStorageUtil from "./AsyncStorageUtil";
import {ErrorModel} from "../exception/ErrorModel";
import toastUtil from "./ToastUtil";

class HttpClientUtil {
    private static DEFAULT_TIMEOUT = 5000;
    private static BASE_URL = "https://local-health.allybot.com.br";

    static async request<T>(
        endpoint: string,
        method: "GET" | "POST" | "PUT" | "DELETE",
        data?: any,
        includeAuth: boolean = true,
        additionalHeaders?: Record<string, string>
    ): Promise<AxiosResponse<T>> {

        const url = `${this.BASE_URL}${endpoint}`;
        const headers = await this.buildHeaders(includeAuth, additionalHeaders);
        const config = this.buildAxiosConfig<T>(method, url, headers, data);
        return await this.performRequest<T>(config);
    }

    private static async performRequest<T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        try {
            return await axios(config);
        } catch (error: any) {
            throw error.response || error;
        }
    }

    private static async buildHeaders(includeAuth: boolean, additionalHeaders?: Record<string, string>): Promise<Record<string, string>> {
        const headers: Record<string, string> = {
            "Content-Type": "application/json",
            ...additionalHeaders,
        };

        if (includeAuth) {
            await this.addAuthHeaders(headers);
        }

        return headers;
    }

    private static async addAuthHeaders(headers: Record<string, string>): Promise<void> {
        let token = await asyncStorageUtil.getItem("accessToken");
        let clientId = await asyncStorageUtil.getItem("clientId");

        if (token) {
            headers.Authorization = `Bearer ${token}`;
        } else {
        }

        if (clientId) {
            headers["X-CLIENT-ID"] = clientId;
        }
    }

    protected static buildAxiosConfig<T>(
        method: "GET" | "POST" | "PUT" | "DELETE",
        url: string,
        headers: Record<string, string>,
        data: any | void
    ): AxiosRequestConfig {
        return {
            method,
            url,
            headers,
            data,
            timeout: this.DEFAULT_TIMEOUT,
        };
    }

    public static handleErrorResponse(error: any) {
        const errorData: ErrorModel = error?.data;
        if (errorData) {
            toastUtil.showErrorMessage(errorData.message);
        } else {
            toastUtil.showErrorMessage("Erro ao processar a resposta de erro.");
        }
    }
}

export default HttpClientUtil;