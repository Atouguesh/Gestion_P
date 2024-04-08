//get form and task list Element
const form = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

// Charger les tâches depuis le localStorage au chargement de la page
loadTasks();

form.addEventListener("submit" , (event) =>{
    event.preventDefault();
    //Get form value
    
    const date = document.getElementById("dueDate").value;
    const priorite = document.getElementById("priority").value;
    const statut  = document.getElementById("status").value;
    

    console.log(date, priorite, statut);
     // Créer un objet représentant une tâche
     const task = {
        date: date,
        priorite: priorite,
        statut: statut
    };
    //Create task element
    //const task = document.createElement("div");
    //task.className = "task";
    // Ajouter la tâche à la liste
    addTask(task);

    // Enregistrer la tâche dans le localStorage
    saveTaskToLocalStorage(task);

    // Effacer les champs du formulaire après soumission
    document.getElementById("dueDate").value = "";
    document.getElementById("priority").value = "";
    document.getElementById("status").value = "";
});
function addTask(task) {
    const taskElement = document.createElement("div");
    taskElement.className = "task";
    taskElement.innerHTML = `
        <span>Date: ${task.date}<br>Priorité: ${task.priorite}<br>Statut: ${task.statut}</span>
        <span class="delete">Delete</span>
    `;
    taskElement.querySelector('.delete').addEventListener("click", () => {
        taskElement.remove();
        // Supprimer la tâche du localStorage
        removeTaskFromLocalStorage(task);
    });

    taskList.appendChild(taskElement);
}

function saveTaskToLocalStorage(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        addTask(task);
    });
}

function removeTaskFromLocalStorage(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(item => JSON.stringify(item) !== JSON.stringify(task));
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

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

   

   