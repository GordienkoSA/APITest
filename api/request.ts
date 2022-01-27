import got from 'got'
import type { URLSearchParams } from 'url'

export class JSONRequest{
    private options: any = {
        respopnseType: "json"
    }

    url(url: string ){
        this.options.url = url
        return this
    }

    searchParams(searchParams:URLSearchParams){
        this.options.searchParams = searchParams
        return this
    }

    async send(){
        return got<any>(this.options)
    } 
}