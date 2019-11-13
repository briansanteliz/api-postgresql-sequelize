import Task from '../models/Tasks';
export async function createTask(req, res) {

    const { name, done, projectid } = req.body;
    const newTask = await Task.create({
        name,
        done,
        projectid
    }, {
        fields: ['name', 'done', 'projectid']
    });
    res.json({ mensaje: 'Nueva tarea creada', data:newTask });
};
export async function getTasks(req, res) {
    const tasks = await Task.findAll({
        attributes: ['id', 'projectid', 'name', 'done'],
        order: [
            ['id', 'DESC']
        ]
    });
    res.json({
        mensaje:'Tareas Obtenidas satisfatoriamente',
        datos:tasks
    });
};
export async function singlesTask(req, res) {
    const {id} = req.params;
    const oneTask = await Task.findOne({
        attributes: ['id', 'name','done', 'projectid'],
        where:{id},
    });
    res.json(oneTask);
};
export async function deletedTask(req, res) {
    const { id} = req.params;
    const deletedTask = await Task.destroy({
        where : {
            id
        }
    });
    res.json({mensaje: 'Tarea eliminada', datos:deletedTask});
};
export async function updateTask(req, res) {
    const {id} = req.params;
    const {name, done, projectid} = req.body;
    const task = await Task.findOne({
        attributes: ['id', 'name','done', 'projectid'],
        where:{id}
    });
    const updateTask = await Task.update({
        name, 
        done,
        projectid
    }, {
        where:{
            id
        }
    });
    res.json({
        mensaje : 'Tarea Actualizada',
        nuevaTarea: updateTask
    });
};
export async function getTaskByProject(req, res) {
    const {projectid} = req.params;
    const tareas = await Task.findAll({
        attributes: ['id', 'projectid', 'done', 'name'],
        where:{
            projectid
        }
    });
    res.json({
       
       tareas
    });
}
