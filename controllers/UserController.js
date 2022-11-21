const UserRepository = require('../repositories/UserRepository');

const User = {
    async create(request, response){
        try {
            const { name, email, password } = request.body;
            const result = await UserRepository.create(name, email, password);
            response.status(201).json(result);
        } catch (error) {
            response.status(400).send({error: error});
        }
    },
    async edit(request, response){
        try {
            const { id } = request.params;
            const body = request.body;
            const result = await UserRepository.edit(id, body);
            response.status(200).json(result);
        } catch (error) {
            response.status(400).send({error: error});
        }


    },
    async signin(request, response){
        try {
            const { email, password} = request.body;
            const result = await UserRepository.signin(email, password);
            response.status(200).json(result);
        } catch (error) {
            response.status(400).send({error: error});
        }
    },
    async login(request, response){
        response.render('users/login')
    }
}

module.exports = User;