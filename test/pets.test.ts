
import { strict as assert} from 'assert'
import { CampaignController } from '../api/Controller/campaign.controller'

describe('Pet', function(){
    it('', async function () {
        const id = 1
        const campaignController = new CampaignController
        const campaign = await campaignController.getById(1)

        console.log(campaign.result.id)
        

        //const campaigns = JSON.parse(response.body)
       
        //console.log(campaigns.length)
        //assert(campaigns.length > 0, 'More than 0')
        //assert(body.every(campaign => body.tags.some(tag => tag.name == 'bsc')))
    })

    /*it('', async function () {
        const campaignController = new CampaignController
        const campaigns = await campaignController.findByStatus('bsc')

        console.log(campaigns.every(campaign => campaign.tags))
        //const campaigns = JSON.parse(response.body)
       
        //console.log(campaigns.length)
        //assert(campaigns.length > 0, 'More than 0')
        //assert(body.every(campaign => body.tags.some(tag => tag.name == 'bsc')))
    })*/
})