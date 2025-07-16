import {DataSource} from "typeorm";
import {Task} from "../entities/task.entity";

//databace connection
export const TaskDataSource = new DataSource({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT) || 5432,
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD,
      database: 'tasks2_db',
      synchronize: true,
      logging: false,
      entities: [Task]
});