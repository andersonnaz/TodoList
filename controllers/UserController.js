const UserRepository = require('../repositories/UserRepository');
const bcrypt = require('bcryptjs');

const User = {
    async create(request, response){
        try {
            const { name, email, password } = request.body;
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);
            await UserRepository.create(name, email, hash);
            response.status(201).redirect('/user/signup');
        } catch (error) {
            response.status(400).send({error: error});
        }
    },
    async edit(request, response){
        try {
            const body = request.body;
            const result = await UserRepository.edit(body);
            response.status(200).json(result);
        } catch (error) {
            response.status(400).send({error: error});
        }
    },
    async signin(request, response){
        try {
            const { email, password } = request.body;
            const [user] = await UserRepository.signin(email);
            if(user){
                const auth = bcrypt.compareSync(password, user.password);
                if(auth) {
                    request.session.user = {
                        id: user.id,
                        name: user.name,
                        email: user.email
                    }
                    response.status(200).redirect('/mytasks');
                }else{
                    response.status(404).redirect('/user/login');    
                }
            }else {
                response.status(400).redirect('/user/login');
            }
        } catch (error) {
            response.status(400).send({error: error});
        }
    },
    logout(request, response){
        request.session.user = undefined;
        response.redirect('/login')
    }

}

module.exports = User;