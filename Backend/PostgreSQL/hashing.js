const bcrypt = require('bcrypt');

const saltRounds = 10;
var plain_text = 'hello';
var hash_text = '';

bcrypt.hash(plain_text, saltRounds, (err, hash) => {
    hash_text = hash;
    console.log(hash_text)
})

bcrypt.compare(plain_text, hash_text, (err,result) => {
    console.log(result);
})

console.log(hash_text);
console.log(plain_text);
