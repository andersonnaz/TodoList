const database = require('../config/database');

const Task = {
    async create(title, description, id_user){
        try {
            const result = await database('tasks').insert({
                title,
                description,
                date: new Date(),
                id_user,
                done: false
            });
            return result;    
        } catch (error) {
            return error;
        }
    },
    async list(){
        try {
            const result = await database('tasks')
                .where({'done': false})
                .select('*')
            // const result = await database.select()
            //     .table('tasks');
            return result;
        } catch (error) {
            return error;
        }
    },
    async delete(id){
        try {
            const result = await database('tasks')
                .where('id', id)
                .del();
            return result;
        } catch (error) {
            return error;
        }
    },
    async edit(body){
        try {
            const result = await database('tasks')
                .where({'id': body.id})
                .update(body)
            return result;
        } catch (error) {
            return error;
        }
    },
    async byId(id){
        try {
            const result = await database('tasks')
                .where({'id': id})
                .select('*')
            return result;
        } catch (error) {
            return error;
        }
    },
    async byUser(id){
        try {
            const result = await database('tasks')
                .where({'id_user': id})
                .where({'done': false})
                .select('*')
            return result
        } catch (error) {
            return error;
        }
    },
    async done(id){
        try {
            const result = await database('tasks')
                .where({'id': id})
                .update({'done': true})
            return result;
        } catch (error) {
            return error;
        }
    }
}

module.exports = Task;
