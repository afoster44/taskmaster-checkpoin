import { subTasksService } from "../Services/SubTasksService.js";


export default class SubTasksController {
    constructor() {
        console.log('linked to sub tasks controller');
    }

    createSubTask(event, taskId) {
        event.preventDefault()
        console.log('creating sub task');
        let form = event.target
        if (form.title.value.length == 0) {
            return window.alert("Must have a valid input of at least 3 characters")
        }
        let rawSubTask = {
            title: form.title.value,
            taskId: taskId
        }
        subTasksService.createSubTask(rawSubTask)
    }

    deleteSubTasks(subTaskId) {
        window.confirm('Are you sure you want to delete this?')
        subTasksService.deleteSubTask(subTaskId)
    }
}