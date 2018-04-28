const crypto = require('crypto');

const secret = 'abcdefg';

function HASH(words, mode) {
    return crypto.createHash(mode)
        .update(words)
        .digest('hex');
}

function HMAC(words, secret, mode) {
    return crypto.createHmac(mode, secret)
        .update(words)
        .digest('hex');
}

console.log(HASH('hahahaha', 'MD5'));
console.log(HMAC('hahahaha', 'psw', 'MD5'));

function aesEncrypt(data, key) {
    const cipher = crypto.createCipher('aes192', key);
    let crypted = cipher.update(data, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
}

function aesDecrypt(encrypted, key) {
    const decipher = crypto.createDecipher('aes192', key);
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

let data = 'Hello, this is a secret message!';
let key = 'Password!';
let encrypted = aesEncrypt(data, key);
let decrypted = aesDecrypt(encrypted, key);

console.log('Plain text: ' + data);
console.log('Encrypted text: ' + encrypted);
console.log('Decrypted text: ' + decrypted);