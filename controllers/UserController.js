const UserRepository = require('../repositories/UserRepository');
const bcrypt = require('bcryptjs');

const User = {
    async create(request, response){
        try {
            const { name, email, password } = request.body;
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);
            await UserRepository.create(name, email, hash);
            response.status(201).redirect('/login');
        } catch (error) {
            response.status(400).send({error: error});
        }
    },
    async edit(request, response){
        try {
            const body = request.body;
            const result = await UserRepository.edit(body);
            response.status(200).json(result);
        } catch (err) {
            response.status(400).send({error: err});
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
                        email: user.email,
                        admin: user.admin
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
    },
    async list(request, response){
        try {
            const users = await UserRepository.list();
            response.status(200).render('users/allUsers', {users});
        } catch (err) {
            response.status(400).send({error: err})
        }
    },
    async delete(request, response) {
        try {
            const id = request.params.id;
            await UserRepository.delete(id);
            response.status(200).redirect('/users');
        } catch (error) {
            response.status(400).send({error: err});
        }
    }

}

module.exports = User;