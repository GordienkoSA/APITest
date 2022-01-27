import got from 'got'
import { URLSearchParams } from 'url'
import { JsonRequest } from 'http-req-builder'
import type { definitions } from '../../.temp/types'


export class CampaignController{
    async getById(id: string | number) {
        
        return (
            await new JsonRequest()
                .url(`https://dev.pad.daoland.io/api/v1/campaign/${id}`)
                .searchParams(new URLSearchParams({network: 'bsc'}))
                .send<definitions['Model3']>()
        ).body
    } 

    async findByStatus(status: string | string[]) {

        return (
            await new JsonRequest()
                .url(`https://dev.pad.daoland.io/api/v1/campaigns/`)
                .searchParams(new URLSearchParams({ status }))
                .send<definitions['Model1'][]>()
        ).body
    }
}