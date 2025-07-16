import {TaskDataSource} from "../db/data-source";
import {Task} from "../entities/task.entity";

const repo = TaskDataSource.getRepository(Task);

//create task logic
export const createTask = async (title: string, description: string) => {
      const task = repo.create({title, description});
      return await repo.save(task);
};

//get last 5 tasks
export const getLastTasks = async () => {
      return await repo.find({
            where: {isCompleted: false},
            order: {
                  createdAt: "DESC"
            },
            take: 5
      });
}

//done task logic
export const doneTask = async (id: number) => {
      await repo.update(id, {isCompleted: true});

};