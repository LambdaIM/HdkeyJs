/**
 * Address lib tests.
 */
'use strict';

require('chai').should();

const LAMBHDKEY = require('../index.js');

const ADDRESS    = 'lambda163q4m634nq8les4nuvdvz49tk6aeh926t0ccsc';
const BYTES_HEX  = 'd4415dea35980ffcc2b3e31ac154abb6bb9b955a';
const BYTES32_HEX = BYTES_HEX + Buffer.alloc(12).toString('hex');
const PUBLIC_KEY  = '03c5c007170a8b46d7e8ffcaec26a27cf26f7e4fe94ab7f813b98133bc95f3d651';
const ADDRESS_Validator    = 'lambda18j63yncsd8awmf5a6057rlfzxmqlfdntkhlqra';
const ADDRESS_valoper    = 'lambdavaloper18j63yncsd8awmf5a6057rlfzxmqlfdntqnktef';

describe('lib/address', () => {
    let bytes;
    let bytes32;

    it('Should generate address from public key', () => {
        const addr = LAMBHDKEY.address.getAddress(Buffer.from(PUBLIC_KEY, 'hex'));
        addr.should.be.equal(ADDRESS);
    });

    it('Should get bytes from address', () => {
        bytes = LAMBHDKEY.address.getBytes(ADDRESS);

        bytes.length.should.be.equal(20);
        bytes.toString('hex').should.be.equal(BYTES_HEX);
    });

    it('Should get address from bytes', () => {
        const addr = LAMBHDKEY.address.getAddressFromBytes(bytes);
        addr.should.be.equal(ADDRESS);
    });

    it('Should get valoper address from address', () => {
        const addr = LAMBHDKEY.address.validatorAddress(ADDRESS_Validator);
        addr.should.be.equal(ADDRESS_valoper);
    });

    it('Should get miner address from address', () => {
        const addr = LAMBHDKEY.address.MinerAddress('lambda1mzs0zsm7gw6hzfchaw75ge7g5jxyvq8ue50p0x');
        addr.should.be.equal('lambdamineroper1mzs0zsm7gw6hzfchaw75ge7g5jxyvq8udmrx6m');
    });



    

    
});
