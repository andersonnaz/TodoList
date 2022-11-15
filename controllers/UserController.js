const UserRepository = require('../repositories/UserRepository');

const User = {
    create(request, response, next){
        const { name, email, password } = request.body;
        UserRepository.create(name, email, password).then(() => {
            response.status(201).send('user created!');
        }).catch((error) => {
            console.log('error', error);
            response.status(400).send('error, user cant be created!')
        })
    },
    signin(){},
    signup(){},

}

module.exports = User;