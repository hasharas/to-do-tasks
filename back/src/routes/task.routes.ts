import {Router} from "express";
import * as TaskController from "../controllers/task.controller";

const router = Router();


router.post('/tasks', TaskController.createTask);
router.get('/tasks', TaskController.getTasks);
router.patch('/tasks/:id', TaskController.doneTask);


export default router;