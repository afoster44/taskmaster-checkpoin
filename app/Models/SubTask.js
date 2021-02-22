import { generateId } from "../Utils/GenerateId.js";


export default class SubTask {
    constructor({ title, id = generateId(), taskId }) {
        this.title = title
        this.id = id
        this.taskId = taskId
    }

    get Template() {
        return /*html*/ `
       <div class="col-12">
       <h1>${this.title}
       <input type="checkbox" class="mr-1" onclick="">
       <button type="button" class="text-danger close mt-3"
               onclick="app.subTasksController.deleteSubTasks('${this.id}')"><span>&times;</span></button> </h1>
   </div>
       `
    }
}