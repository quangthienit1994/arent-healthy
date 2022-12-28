import {fetcherSWR} from "@/Helpers/fetcher";
import {config} from "@/config";

class ApiService {

    public get(url: string){
        return fetcherSWR(url)
    }

    public post(url: string, data: any){
        return fetcherSWR({
            uri: config.api + url,
            body: data,
            method: 'post'
        })
    }

    public getAnalyze = () => {
        return this.get('/data/analyze.json')
    }

    public getFoods = () => {
        return this.get('/data/foods.json')
    }

}

export default new ApiService()
