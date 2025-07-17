import { URL } from "../configs/const";
import HttpService from "./HttpService";


class TaskService extends HttpService {
      async getTasks() {
            return this.sendRequest({
                  method: 'GET',
                  url: `${URL.BASE_URL}/tasks`,
            });
      }

      async createTask(data) {
            return this.sendRequest({
                  method: 'POST',
                  url: `${URL.BASE_URL}/tasks`,
                  data,
            });

      }
      async markDone(id) {
            return this.sendRequest({
                  method: 'PATCH',
                  url: `${URL.BASE_URL}/tasks/${id}`,
            });
      }
}

const taskService = new TaskService();
export default taskService;