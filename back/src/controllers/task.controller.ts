import {Request, Response} from 'express';
import * as TaskService from '../services/task.service';

//create task
export const createTask = async (req: Request, res: Response) => {
      const {title, description} = req.body;
      const task = await TaskService.createTask(title, description);
      res.status(201).json(task);
}

//get last 5 tasks
export const getTasks = async (_req: Request, res: Response) => {
      const tasks = await TaskService.getLastTasks();
      res.status(200).json(tasks);
}

//done task