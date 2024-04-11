// Récupère l'élément du formulaire avec l'ID 
const form = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

//  Appelle la fonction loadTasks() pour charger les tâches depuis le localStorage lors du chargement de la page.
loadTasks();

// Ajoute un écouteur d'événements sur la soumission du formulaire. Lorsque le formulaire est soumis, la fonction fléchée est exécutée.
form.addEventListener("submit" , (event) =>{
    event.preventDefault();//Empêche le comportement par défaut de soumission du formulaire
   
    // Récupère la valeur de l'élément d'entrée du formulaire.
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
   
    // Ajouter la tâche à la liste
    addTask(task);

    // Enregistrer la tâche dans le localStorage
    saveTaskToLocalStorage(task);

    // Effacer les champs du formulaire après soumission
    document.getElementById("dueDate").value = "";
    document.getElementById("priority").value = "";
    document.getElementById("status").value = "";
});
function addTask(task) { //  Définit une fonction pour ajouter une tâche à la liste de tâches
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

function saveTaskToLocalStorage(task) {//Définit une fonction pour sauvegarder une tâche dans le localStorage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {//Définit une fonction pour charger les tâches depuis le localStorage et les afficher sur la page
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        addTask(task);
    });
}

function removeTaskFromLocalStorage(task) {// Définit une fonction pour supprimer une tâche du localStorage
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

   

   