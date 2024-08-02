const db = require('../models')
const asyncWrapper = require('../middleware/async')
const Task = db.tasks




const getAllTasks = asyncWrapper(async (req,res)=>{
    // res.send('get all tasks')
   
        const tasks = await Task.findAll({})
        res.status(200).json({ tasks })
 


}

)


const getTask = asyncWrapper(async (req,res)=>{
    // res.send('get single tasks')
    // res.json({id:req.params.id})
    
        const Taskid = req.params.id
        const task = await Task.findOne({ where: { id:Taskid} })
        if (!task) {
          return res.status(404).json({msg: 'id doesnt exist'})
        }
      
        res.status(200).json({ task })
         

}

)

const createTask = asyncWrapper(async (req,res)=>{
    // res.send('add task')
    // res.json(req.body)
    
        let info = {
            name: req.body.name,
            completed: req.body.completed
        }
        const task = await Task.create(info)
        res.status(201).json({ task })


}
)


const updateTask =asyncWrapper( async (req, res) => {
    const Taskid = req.params.id
    const task = await Task.findOne({ where: { id:Taskid} })
    if (!task) {
        return res.status(404).json({msg: 'id doesnt exist'})
      }
    if (req.body.name !== undefined){
        await task.update({name:req.body.name})
    }
    
    if (req.body.completed !== undefined){
        await task.update({completed:req.body.completed})
    }
    await task.save()
    res.status(200).json({ task })

}
)


const deleteTask = asyncWrapper(async (req,res)=>{
        const Taskid = req.params.id
        await Task.destroy({where: {id: Taskid}})
    
        res.status(200).json({task: null, status: 'success'})    
    
}
)
module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}