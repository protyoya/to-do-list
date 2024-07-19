let taskList = document.getElementById('taskList');
let taskInput = document.getElementById('taskInput');

function addTask() {
    let taskText = taskInput.value;
    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    let li = document.createElement('li');
    li.innerHTML = taskText + '<button onclick="removeTask(this)">Remove</button>';
    taskList.appendChild(li);
    taskInput.value = '';
}

function removeTask(task) {
    task.parentElement.remove();
}


