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

    public getExercises = () => {
        return this.get('/data/exercises.json')
    }

    public getDiaries = () => {
        return this.get('/data/diaries.json')
    }

    public getNews = () => {
        return this.get('/data/news.json')
    }

}

export default new ApiService()
