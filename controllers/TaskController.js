const TaskRepository = require('../repositories/TaskRepository');

const Task = {
    async create(request, response){
        try {
            const { title, description } = request.body;
            const id_user = request.session.user.id;
            const result = await TaskRepository.create(title, description, id_user);
            response.status(201).json(result);
        } catch (error) {
            response.status(404).json({error: error});
        }
    },
    async list(request, response){
        try {
            const tasks = await TaskRepository.list();
            response.status(200).render('tasks/home', {tasks});
        } catch (error) {
            response.status(404).json({error: error});
        }

    },
    async delete(request, response){
        try {
            const { id } = request.params;
            const result = await TaskRepository.delete(id);
            response.status(200).json(result);
        } catch (error) {
            response.status(404).json({error: error});
        }
    },
    async edit(request, response){
        try {
            const id = request.params.id;
            const body = request.body;
            const result = await TaskRepository.edit(id, body);
            response.status(200).json(result);
        } catch (error) {
            response.status(404).json({error: error});
        }

    },
    async byId(request, response){
        try {
            const id = request.params.id;
            const result = await TaskRepository.byId(id);
            response.status(200).json(result);
        } catch (error) {
            response.status(404).json({error: error});
        }
    }


}

module.exports = Task;