const TaskRepository = require('../repositories/TaskRepository');

const Task = {
    create(request, response, next){
        const { title, description, id_user} = request.body;
        TaskRepository.create(title, description, id_user)
        .then((result) => {
            response.status(201).send('task created!');
        }).catch((error) => {
            console.log('error', error);
            response.status(404).send('error, task cant be created!');
        })
    },
    list(request, response, next){
        console.log('list controller');
        response.json(TaskRepository.list());
    },
    delete(){

    },
    edit(){

    },
    byId(){

    }


}

module.exports = Task;