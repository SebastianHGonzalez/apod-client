import axios, { AxiosInstance, AxiosRequestConfig, AxiosError } from 'axios';

import IAPODApiClient from './IAPODApiClient';


interface IAPODApiClientOptions {
    baseURL: string;
    apiKey: string;
}

class APODApiClient implements IAPODApiClient {

    public axios: AxiosInstance;

    constructor({ baseURL, apiKey }: IAPODApiClientOptions) {
        this.axios = axios.create({
            baseURL,
            params: {
                api_key: apiKey
            }
        });
    }

    get endpoint() {
        return '/planetary/apod';
    }

    fetchArticle() {
        return this.axios.get(this.endpoint)
            .then((response) => response.data)
            .catch((error: AxiosError) => {
                const responseMessage = error.response &&
                    error.response.data &&
                    error.response.data.error &&
                    error.response.data.error.message;
                throw new Error(responseMessage || error.message);
            });
    }
}

export default APODApiClient;
