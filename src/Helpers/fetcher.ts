import axios, {Axios, AxiosRequestConfig, AxiosResponse} from 'axios'
import _ from 'lodash'

export const fetcher = <T = any>(option: string | { uri: string, body?: any, method?: keyof Axios | string }, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    if (_.isString(option)) {
        return axios.get(option, config);
    } else {
        const {uri, body, method} = option
        if(method !== 'get') {
            return (axios as any)[(method ?? 'get')](uri, body, config);
        } else {
            return (axios as any)[(method ?? 'get')](uri, config);
        }
    }
}

export const fetcherSWR  = async <T = any>(option: string | { uri: string, body?: any, method?: keyof Axios | string }, config?: AxiosRequestConfig): Promise<T> => {
    await new Promise(resolve => setTimeout(resolve, 1500))
    const {data} = await fetcher(option, config);
    return data;
}
