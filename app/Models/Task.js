import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/GenerateId.js";
import SubTask from "./SubTask.js";


export default class Task {
    constructor({ title, color, id = generateId() }) {
        this.title = title
        this.color = color
        this.id = id
    }

    get Template() {
        return /*html*/ `
        <div class="col-6 border rounded shadow-sm" id="${this.color.toLowerCase()}">
        <h2>${this.title}
            <button class="text-danger btn" onclick="app.tasksController.deleteTaskForm('${this.id}')"><span
                    class="close text-danger m-auto">&times;</span></button>
                    </h2>
            <form class="form-group" onsubmit="app.subTasksController.createSubTask(event, '${this.id}')">
                <label for="tasksToAdd" class="strong">Tasks to add:</label>
                <input type="text" class="form-control" name="title" placeholder="Tasks Please :P" minlength="3" maxlength="50" >
                <button class="btn btn-success mt-2" type="submit">Submit</button>
                </form>
                
                <div class="row">
                ${this.SubTask}
            </div>
    </div>
        `
    }

    get SubTask() {
        let template = ''
        let subTasks = ProxyState.subTasks.filter(st => st.taskId == this.id)
        subTasks.forEach(st => template += st.Template)
        return template
    }

}