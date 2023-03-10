const crypto = require("crypto");
const fs = require("fs");

function genKeyPAir() {
    const keyPair = crypto.generateKeyPairSync("rsa", {
        modulusLength: 4096, //bits- standard for RSA keys
        publicKeyEncoding: {
            type: "pkcs1", // "Public key Cryptography Standards 1"
            format: "pem", // Most common formatting choice
        },
        privateKeyEncoding: {
            type: "pkcs1", // "Public key Cryptography Standards 1"
            format: "pem",
        },
    });

    // Create the public key file
    fs.writeFileSync(`${__dirname}/id_rsa_pub.pem`, keyPair.publicKey);

    // Create the private key file
    fs.writeFileSync(`${__dirname}/id_rsa_priv.pem`, keyPair.privateKey);
}

genKeyPAir();
