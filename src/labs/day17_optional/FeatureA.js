import sender from 'axios';
import { COMMON_HEADER } from './headers/Headers.js';
import { isRespStatusValid, isUserValid } from '../day17_optional/utils/CommonVerification.js';

describe('GET | TODO', function () {
    it('should be able to get todo 01', async () => {
        const resp = await sender({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            headers: COMMON_HEADER,
        });
        console.log(resp.data);
        isRespStatusValid(resp, 200);
        isUserValid(resp.data, 1);
    });
})

