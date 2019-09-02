/**
 * Address lib tests.
 */
'use strict';

require('chai').should();

const cosmos = require('../index.js');

const ADDRESS    = 'lambda163q4m634nq8les4nuvdvz49tk6aeh926t0ccsc';
const BYTES_HEX  = 'd4415dea35980ffcc2b3e31ac154abb6bb9b955a';
const BYTES32_HEX = BYTES_HEX + Buffer.alloc(12).toString('hex');
const PUBLIC_KEY  = '03c5c007170a8b46d7e8ffcaec26a27cf26f7e4fe94ab7f813b98133bc95f3d651';

describe('lib/address', () => {
    let bytes;
    let bytes32;

    it('Should generate address from public key', () => {
        const addr = cosmos.address.getAddress(Buffer.from(PUBLIC_KEY, 'hex'));
        addr.should.be.equal(ADDRESS);
    });

    it('Should get bytes from address', () => {
        bytes = cosmos.address.getBytes(ADDRESS);

        bytes.length.should.be.equal(20);
        bytes.toString('hex').should.be.equal(BYTES_HEX);
    });

    it('Should get address from bytes', () => {
        const addr = cosmos.address.getAddressFromBytes(bytes);
        addr.should.be.equal(ADDRESS);
    });

    
});
