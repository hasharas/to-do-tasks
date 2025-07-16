import {Request, Response} from 'express';
import * as TaskService from '../services/task.service';

export const createTask = async (req: Request, res: Response) => {
      const {title, description} = req.body;
      const task = await TaskService.createTask(title, description);
      res.status(201).json(task);
}