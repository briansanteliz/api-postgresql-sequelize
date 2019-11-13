import {Router} from 'express';
const router = Router();
import {createTask,getTasks,deletedTask,updateTask,singlesTask,getTaskByProject } from '../controllers/task.controller';

router.post('/', createTask);
router.get('/', getTasks);
router.delete('/:id', deletedTask);
router.put('/:id', updateTask);
router.get('/:id', singlesTask);
router.get('/projects/:projectid', getTaskByProject);
export default router;