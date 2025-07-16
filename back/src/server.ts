import app from "./app";
import {TaskDataSource} from "./db/data-source";

//connect to the database and start the server
const PORT = 5000;

const startServer = async () => {
      try {
            await TaskDataSource.initialize();
            console.log("Database connected successfully");

            app.listen(PORT, () => {
                  console.log(`Server is running on http://localhost:${PORT}`);
            });
      } catch (error) {
            console.error("Error connecting to the database:", error);
            // Exit the process if failure once 
            process.exit(1);
      }
};

startServer();


