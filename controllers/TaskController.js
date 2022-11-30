const TaskRepository = require('../repositories/TaskRepository');

const Task = {
    async create(request, response){
        try {
            const { title, description } = request.body;
            const id_user = request.session.user.id;
            console.log(request.body);
            const result = await TaskRepository.create(title, description, id_user);
            response.status(201).redirect('/create');
        } catch (err) {
            response.status(404).json({error: err});
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
            await TaskRepository.delete(id);
            response.status(200).redirect('/mytasks');
        } catch (err) {
            response.status(404).json({error: err});
        }
    },
    async edit(request, response){
        try {
            const body = request.body;
            await TaskRepository.edit(body);
            response.status(200).redirect('/mytasks');
        } catch (err) {
            response.status(404).json({error: err});
        }

    },
    async done(request, response){
        try {
            const id = request.params.id;
            const result = await TaskRepository.done(id);
            response.status(200).redirect('/mytasks');
        } catch (err) {
            response.status(404).json({error: err});
        }
    },
    async myTask(request, response){
        try {
            const { id, name } = request.session.user;
            const tasks = await TaskRepository.byUser(id);
            response.status(200).render('tasks/myTasks', {tasks, name});
        } catch (err) {
            response.status(404).json({error: err});
        }
    },
    async renderEditTaskPage(request, response){
        try {
            const id = request.params.id;
            const [task] = await TaskRepository.byId(id);
            response.render('tasks/editTask', {task});
        } catch (err) {
            response.status(404).json({error: err});
        }
    }


}

module.exports = Task;