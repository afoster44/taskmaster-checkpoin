import { ProxyState } from "../AppState.js";
import { tasksService, TasksService } from "../Services/TasksService.js";


function _draw() {
    let tasksElem = document.getElementById('main-title')
    let template = ""
    ProxyState.tasks.forEach(t => template += t.Template)
    tasksElem.innerHTML = template
}
export default class TasksController {
    constructor() {
        console.log('linked to tasks controller');
        ProxyState.on('tasks', _draw)
        ProxyState.on('subTasks', _draw)
        _draw()
    }

    createTaskForm(event) {

        event.preventDefault()
        let form = event.target
        debugger
        if (form.title.value.length == 0) {
            return window.alert("Must have a valid input of at least 3 characters")
        }
        switch (form.color.value.toLowerCase()) {
            case "purple":
            case "yellow":
            case "blue":
            case "green":
            case "grey":
                break;
            default:
                window.alert('Invalid color...please choose from purple, blue, green, yellow or grey. Thank you!')
                return
        }
        let rawTask = {
            title: form.title.value,
            color: form.color.value
        }

        tasksService.createTaskForm(rawTask)
    }
    deleteTaskForm(taskId) {
        tasksService.deleteTaskForm(taskId)
    }
}
