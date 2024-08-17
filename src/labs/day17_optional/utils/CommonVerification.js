import { assert, expect } from 'chai';
export const isRespStatusValid = ({ status }, expectedStatus) => {
    expect(status).equals(expectedStatus);
}

export const isUserValid = ({ userId }, expectedId) => {
    assert(userId === expectedId, `[ERR] UserId is not ${expectedId}`);
}