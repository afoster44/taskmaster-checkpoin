import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";
import { saveState } from "../Utils/LocalStorage.js";


export class TasksService {
    constructor() {
        console.log('linked to tasks service');
        ProxyState.on('tasks', saveState)
    }

    createTaskForm(rawTask) {
        ProxyState.tasks = [new Task(rawTask), ...ProxyState.tasks]
    }

    deleteTaskForm(taskId) {
        ProxyState.tasks = ProxyState.tasks.filter(t => t.id != taskId)
    }
}

export const tasksService = new TasksService();