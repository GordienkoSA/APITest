import { CookieJar } from 'tough-cookie'
import { CONFIG } from '../config/npmConfig';
import { CampaignController } from "./Controller/campaign.controller";
import { UserController } from "./Controller/user.controller";

export class ApiClient {
    public readonly campaign: CampaignController
    public readonly user: UserController

    constructor(params?: { token?: string, prefixUrl?: string, cookies?: CookieJar }) {
        const defaultParams = {
            prefixUrl: CONFIG.get('ido_url'),
            cookies: new CookieJar(),
            token: undefined
        }

        const mergedParams = {
            ...defaultParams,
            ...params
        }

        this.campaign = new CampaignController(mergedParams)
        this.user = new UserController(mergedParams)
    }

    static async loginAs(credentials: { username: string, password: string }) {
        return new ApiClient({
            token: await new ApiClient().user.login(credentials)
        })
    }
}