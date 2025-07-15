import {DataSource} from "typeorm";
import {Task} from "../entities/task.entity";


export const TaskDataSource = new DataSource({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1111',
      database: 'tasks2_db',
      synchronize: true,
      logging: false,
      entities: [Task]
});