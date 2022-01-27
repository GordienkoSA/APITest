import { URLSearchParams } from 'url'
import { JsonRequestWithValidation } from '../request';

import type { definitions } from '../../.temp/types'
import { BaseController } from './base.controller';

export class PetController extends BaseController {
    async getById(id: string | number) {
        return (
            await new JsonRequestWithValidation()
                .prefixUrl(this.params.prefixUrl)
                .url(`campaign/${id}`)
                .headers({ token: this.params.token })
                .cookieJar(this.params.cookies)
                .searchParams(new URLSearchParams({network: 'bsc'}))
                .send<definitions['Model3']>()
        ).body
    }
}