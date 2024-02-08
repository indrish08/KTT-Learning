const bcrypt = require('bcrypt');

const saltRounds = 10;
var plain_text = 'hello';
var hash_text = '';

bcrypt.hash(plain_text, saltRounds)
    .then((hash) => {
        hash_text = hash;
        console.log(hash_text)
        check(hash_text)
    }).catch(error => {
        console.log(error);
    });

function check(hash_text){
    bcrypt.compare(plain_text, hash_text)
        .then((result) => {
            console.log(result);
        }).catch(error => {
            console.log(error);
        });
}
