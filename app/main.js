import SubTasksController from "./Controllers/SubTasksController.js";
import TasksController from "./Controllers/TasksController.js";
import ValuesController from "./Controllers/ValuesController.js";
import { loadState } from "./Utils/LocalStorage.js";

class App {
  // valuesController = new ValuesController();
  tasksController = new TasksController()
  subTasksController = new SubTasksController()
}

window["app"] = new App();
loadState()