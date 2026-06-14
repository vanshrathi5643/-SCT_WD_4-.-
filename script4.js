function addTask(){

    const taskInput =
    document.getElementById("taskInput");

    const taskDate =
    document.getElementById("taskDate");

    const taskText =
    taskInput.value.trim();

    if(taskText === ""){
        alert("Enter a task");
        return;
    }

    const li =
    document.createElement("li");

    const taskInfo =
    document.createElement("div");

    taskInfo.innerHTML =
    `<strong>${taskText}</strong><br>
    <small>${taskDate.value}</small>`;

    const actions =
    document.createElement("div");

    actions.classList.add("actions");

    const completeBtn =
    document.createElement("button");

    completeBtn.innerText = "✓";

    completeBtn.classList.add("complete-btn");

    completeBtn.onclick = () => {
        taskInfo.classList.toggle("completed");
    };

    const editBtn =
    document.createElement("button");

    editBtn.innerText = "Edit";

    editBtn.classList.add("edit-btn");

    editBtn.onclick = () => {

        const newTask =
        prompt("Edit Task", taskText);

        if(newTask){
            taskInfo.innerHTML =
            `<strong>${newTask}</strong><br>
            <small>${taskDate.value}</small>`;
        }
    };

    const deleteBtn =
    document.createElement("button");

    deleteBtn.innerText = "Delete";

    deleteBtn.classList.add("delete-btn");

    deleteBtn.onclick = () => {
        li.remove();
    };

    actions.appendChild(completeBtn);
    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(taskInfo);
    li.appendChild(actions);

    document.getElementById("taskList")
    .appendChild(li);

    taskInput.value = "";
    taskDate.value = "";
}