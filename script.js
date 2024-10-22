const taskForm = document.getElementById("taskForm");
const newTaskInput = document.getElementById("newTask");
const taskList = document.getElementById("taskList");

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const taskText = newTaskInput.value.trim();
  if (taskText !== "") {
    addTask(taskText);
    newTaskInput.value = "";
  }
});
function addTask(taskText) {
  const li = document.createElement("li");

  li.innerHTML = `
      <input type="checkbox" class="comleteTask">
      <span class="span">${taskText}</span>
      <button class="deleteTask"> 💩</button>
  `;
  taskList.appendChild(li);
}
taskList.addEventListener("click", (e) => {
  if (e.target.classList.contains("deleteTask")) {
    e.target.parentElement.remove();
  }
  if (e.target.classList("comleteTask")) {
    const task = e.target.nextElementSibling;
    task.style.textDecoration = e.target.checked ? "line-trought" : "none";
  }
});
