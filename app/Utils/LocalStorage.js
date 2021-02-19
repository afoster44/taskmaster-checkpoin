import { ProxyState } from "../AppState.js"
import Task from "../Models/Task.js"
import SubTask from "../Models/SubTask.js"

export function saveState() {
    localStorage.setItem('tasklist', JSON.stringify({
        tasks: ProxyState.tasks,
        subTasks: ProxyState.subTasks
    }))
}

export function loadState() {
    let data = JSON.parse(localStorage.getItem('tasklist'))
    if (data) {
        ProxyState.tasks = data.tasks.map(tasks => new Task(tasks))
        ProxyState.subTasks = data.subTasks.map(st => new SubTask(st))
    }
}