const crypto = require('crypto');

const alice = crypto.getDiffieHellman('modp15');
const bob = crypto.getDiffieHellman('modp15');

alice.generateKeys();
bob.generateKeys();

const aliceSecret = alice.computeSecret(bob.getPublicKey(), null, 'hex');
const bobSecret = bob.computeSecret(alice.getPublicKey(), null, 'hex');

//To verify we are using the 3072 bit prime
console.log(alice.getPrime().toString('hex').length * 4);
//To verify both have generated the same secret
console.log(aliceSecret === bobSecret);
//The value of shared secret of Alice
console.log(aliceSecret);
//The value of shared secret of Bob
console.log(bobSecret);
