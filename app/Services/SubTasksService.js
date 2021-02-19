import { ProxyState } from "../AppState.js";
import SubTask from "../Models/SubTask.js";
import { saveState } from "../Utils/LocalStorage.js";


export class SubTasksService {
    constructor() {
        console.log('linked to sub tasks Service');
        ProxyState.on('subTasks', saveState)
    }

    createSubTask(rawSubTask) {
        ProxyState.subTasks = [new SubTask(rawSubTask), ...ProxyState.subTasks]
        console.log(ProxyState.subTasks);
    }

    deleteSubTask(subTaskId) {
        ProxyState.subTasks = ProxyState.subTasks.filter(st => st.id != subTaskId)
    }
}

export const subTasksService = new SubTasksService()