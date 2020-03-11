/**
 * Lib helps to work with Cosmos addresses.
 *
 * @module lib/address
 */
'use strict';

const bech32 = require('bech32');
const Ripemd160 = require('ripemd160');
const crypto = require('crypto');



/**
 * @const lambda bech32 address prefix.
 *
 * @type    {String}
 * @default
 */
const PREFIX = 'lambda';
const PREFIXDev = 'lambdavaloper';
const PREFIXminer = 'lambdamineroper';

/**
 * Get lambda  address (bech32) from public key.
 *
 * @param  {Buffer} publicKey Public key
 * @return {String}           Bech32 address
 */
exports.getAddress = function getAddress(publicKey) {
  const hash = crypto.createHash('sha256')
    .update(publicKey)
    .digest();

  const address = new Ripemd160().update(hash).digest();
  const words = bech32.toWords(address);

  return bech32.encode(PREFIX, words);
};


/**
 * Get bytes from lambda  address (bech32).
 *
 * @param  {String} address lambda  address (bech32).
 * @return {String}         Buffer contains 20 bytes from address.
 */
function ValidatorAddress(address) {
  const decoded = bech32.decode(address);
  return bech32.encode(PREFIXDev, decoded.words);
}

/**
 * Get bytes from lambda  address (bech32).
 *
 * @param  {String} address lambda  address (bech32).
 * @return {String}         Buffer contains 20 bytes from address.
 */
function MinerAddress(address) {
  const decoded = bech32.decode(address);
  return bech32.encode(PREFIXminer, decoded.words);
}

/**
 * Get bytes from lambda  address (bech32).
 *
 * @param  {String} address lambda  address (bech32).
 * @return {Buffer}         Buffer contains 20 bytes from address.
 */
function getBytes(address) {
  const decoded = bech32.decode(address);

  return Buffer.from(bech32.fromWords(decoded.words));
}

/**
 * Get lambda  address (bech32) from bytes.
 *
 * @param  {Buffer} bytes Bytes of address.
 * @return {String}       Cosmos address.
 */
function getAddressFromBytes(bytes) {
  return bech32.encode(PREFIX, bech32.toWords(bytes));
}


exports.getBytes = getBytes;
exports.getAddressFromBytes = getAddressFromBytes;
exports.validatorAddress = ValidatorAddress;

exports.MinerAddress = MinerAddress;



