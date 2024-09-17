function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskDate = document.getElementById('taskDate');
    const taskPriority = document.getElementById('taskPriority');
    const taskText = taskInput.value.trim();
    const dateValue = taskDate.value;
    const priorityValue = taskPriority.value;

    if (taskText === "" || dateValue === "") {
        alert("Please enter a task and date");
        return;
    }

    const todoList = document.getElementById('todoList');
    const li = document.createElement('li');
    let priorityClass = '';
    let priorityText = '';

    // Set the priority class and text
    if (priorityValue === 'high') {
        priorityClass = 'priority-high';
        priorityText = 'High';
    } else if (priorityValue === 'medium') {
        priorityClass = 'priority-medium';
        priorityText = 'Medium';
    } else {
        priorityClass = 'priority-low';
        priorityText = 'Low';
    }

    li.innerHTML = `
        <div class="task-details">
            <span class="task-text">${taskText}</span>
            <span class="date">${dateValue}</span>
            <span class="priority ${priorityClass}">${priorityText}</span>
        </div>
        <div class="actions">
            <button onclick="editTask(this)"><i class="fas fa-edit"></i></button>
            <button onclick="doneTask(this)"><i class="fas fa-check"></i></button>
            <button class="delete" onclick="deleteTask(this)"><i class="fas fa-trash"></i></button>
        </div>
    `;

    todoList.appendChild(li);
    taskInput.value = ""; // Clear input
    taskDate.value = ""; // Clear date
    taskPriority.value = "medium"; // Reset priority
}

function deleteTask(button) {
    const li = button.parentElement.parentElement;
    li.remove();
}

function editTask(button) {
    const li = button.parentElement.parentElement;
    const taskSpan = li.querySelector('.task-text');
    const newTask = prompt("Edit your task:", taskSpan.textContent);
    if (newTask !== null && newTask.trim() !== "") {
        taskSpan.textContent = newTask;
    }
}

function doneTask(button) {
    const li = button.parentElement.parentElement;
    li.classList.toggle('done');
}
