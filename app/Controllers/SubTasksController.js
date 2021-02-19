import { subTasksService } from "../Services/SubTasksService.js";


export default class SubTasksController {
    constructor() {
        console.log('linked to sub tasks controller');
    }

    createSubTask(event, taskId) {
        event.preventDefault()
        console.log('creating sub task');
        let form = event.target
        let rawSubTask = {
            title: form.title.value,
            taskId: taskId
        }
        subTasksService.createSubTask(rawSubTask)
    }

    deleteSubTasks(subTaskId) {
        subTasksService.deleteSubTask(subTaskId)
    }
}