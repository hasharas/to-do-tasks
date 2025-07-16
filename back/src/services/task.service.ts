import {TaskDataSource} from "../db/data-source";
import {Task} from "../entities/task.entity";

const repo = TaskDataSource.getRepository(Task);

export const createTask = async (title: string, description: string) => {
      const task = repo.create({title, description});
      return await repo.save(task);
};

export const getLastTasks = async () => {
      return await repo.find({
            where: {isCompleted: false},
            order: {
                  createdAt: "DESC"
            },
            take: 5
      });
}