//get form and task list Element
const form = document.getElementById('task-form');
const taskList = document.getElementById('task-list');


form.addEventListener("submit" , (event) =>{
    event.preventDefault();
    //Get form value

    const date = document.getElementById("dueDate").value;
    const priorite = document.getElementById("priority").value;
    const statut  = document.getElementById("status").value;

    console.log(date, priorite, statut);
    //Create task element
    const task = document.createElement("div");
    task.className = "task";

    //Create task content
    const taskContent = document.createElement("span");
    taskContent.innerHTML = `Date: ${date}<br>Priorité: ${priorite}<br>Statuts: ${statut}`;

    //Create Delete button
    const deleteBtn = document.createElement("span");
    deleteBtn.className = "delete";
    deleteBtn.innerHTML = "Delete";
    deleteBtn.addEventListener("click", () =>{
        task.remove()
    } )

    //Append task content on delete button to task element
    task.appendChild(taskContent);
    task.appendChild(deleteBtn);

    //Append task element to task list
    taskList.appendChild(task);

    //Append task element to task list
    document.getElementById("dueDate").value ="";
    document.getElementById("priority").value ="";
    document.getElementById("status").value ="";
})