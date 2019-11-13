import {Router} from 'express';
const router = Router();
import { createProject, getProjects, getSinglesProject, deletedProject, updateProject} from '../controllers/project.controller';

// routes:
router.post('/', createProject);
router.get('/', getProjects);
router.get('/:id', getSinglesProject);
router.delete('/:id', deletedProject);
router.put('/:id', updateProject);
export default router;