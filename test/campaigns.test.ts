import { strict as assert } from 'assert'
import { definitions } from '../.temp/types';
import { ApiClient } from '../api/client';

describe('Pet', function () {
    /*it('can be received by id', async function () {
        const client = new ApiClient()
        const id = '3'
        const campaign = await client.campaign.getById(id)
        
        assert(id === campaign.result.id, `Expected returned pet id to be ${id}`)
    })*/

    it('leaderboard by id', async function () {
        const client = new ApiClient()
        const id = 21
        const users = await client.campaign.getLeaderboardById(id)
        
        //assert(users.length > 0)
        //assert(users.(user => user))
    })

    // it('can be added by admin', async function () {
    //     const adminClient = await ApiClient.loginAs(
    //         { username: 'admin', password: 'admin' }
    //     )

    //     const petToCreate: Omit<definitions['Pet'], 'id'> = {
    //         category: {
    //             id: 0,
    //             name: 'catName1'
    //         },
    //         name: "Cat",
    //         photoUrls: [
    //             'http://test.com'
    //         ],
    //         tags: [
    //             {
    //                 id: 0,
    //                 name: 'tag1'
    //             }
    //         ],
    //         status: 'available'
    //     }

    //     const addedPet = await adminClient.pet.addNew(petToCreate)

    //     assert.deepEqual(
    //         addedPet,
    //         {
    //             ...petToCreate,
    //             id: addedPet.id
    //         },
    //         `Expected created pet to match data used upon creation`
    //     )
    // })
})