import Project from '../models/Projects';

// controller-routes
export async function createProject(req, res) {
    try {
        const { name, priority, description, deliverydate } = req.body;
        let newProject = await Project.create({
            name,
            priority,
            description,
            deliverydate
        }, {
            fields: ['name', 'priority', 'description', 'deliverydate']
        });
        if (newProject) {
            return res.json({
                message: 'proyecto creado',
                data: newProject
            });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message:'algo fue mal',
            data: {}
        })
    }

};
export async function getProjects(req, res){
   const getProjects =  await Project.findAll()
   res.json({
       datos: getProjects
   });
};
export async function getSinglesProject(req, res){
   const {id} = req.params;
    const project = await Project.findOne({
       where: {
           id
       }
   });
   res.json({
       mensaje:'Usuario Obtenido satisfactoriamente',
       data: project
   });
};
export async function deletedProject(req, res){
    const { id } = req.params;
    const deletedProject = await Project.destroy({
      where: {
          id
      }  
    });
    res.json({
        mensaje: 'proyecto eliminado satisfactoriamente',
        data: deletedProject
    });
};
export async function updateProject(req, res){
    const {id} = req.params;
    const {name, priority, description, deliverydate} = req.body;
   const projects = await  Project.findAll({
        attributes: ['id', 'name','priority', 'description', 'deliverydate'],
        where: {
            id
        }
    });
    if(projects.length > 0){
        projects.forEach(async project => {
            await project.update({
                name,
                priority,
                description,
                deliverydate
            });
        });
    }
    return res.json({
        mensaje:'Proyecto actualizado',
        datos: projects
    });
};

