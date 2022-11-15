const database = require('../config/database');

const Task = {
    create(title, description, id_user){
        const result = database('tasks').insert({
            title,
            description,
            date: new Date(),
            id_user,
            done: false
        });
        console.log(result);
        return result;
    },
    list(){
        const result = database.select().from('tasks');
        console.log('list repository');
        console.log(typeof(result));
        return result;
    },
    delete(request, response, next){
        response.send('deletar tarefa')
    },
    edit(request, response, next){
        response.send('editar tarefa');
    },
    byId(request, response, next){
        response.send('selecionar tarefa pelo id');
    }


}

module.exports = Task;
