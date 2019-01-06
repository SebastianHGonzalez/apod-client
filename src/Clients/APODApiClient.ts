import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

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
        return this.axios.get(this.endpoint).then((response) => response.data);
    }
}

export default APODApiClient;
