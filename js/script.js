{
  let tasks = [];

  let hideDoneTasks = false;

  const addNewTask = (newTask) => {
    tasks.push({ content: newTask });

    render();
  };

  removeTask = (taskIndex) => {
    tasks.splice(taskIndex, 1);
    render();
  };

  toggleTaskDone = (taskIndex) => {
    tasks[taskIndex].done = !tasks[taskIndex].done;
    render();
  };

  bindToggleDoneEvents = () => {
    const toggleDoneButtons = document.querySelectorAll(".js-toggleDone");

    toggleDoneButtons.forEach((toggleDoneButton, index) => {
      toggleDoneButton.addEventListener("click", () => {
        toggleTaskDone(index);
      });
    });
  };

  bindremoveEvents = () => {
    const removeButtons = document.querySelectorAll(".js-remove");

    removeButtons.forEach((removeButton, index) => {
      removeButton.addEventListener("click", () => {
        removeTask(index);
      });
    });
  };

  const render = () => {
    let tasksListContent = "";

    for (const task of tasks) {
      tasksListContent += `
       <li class="list__item">
         <button class="list__button list__button--toggleDone js-toggleDone">
           ${task.done ? "✓" : ""}
         </button>
         <span class="${task.done ? " list__item--done" : ""}">
           ${task.content}
         </span>
         <button class="list__button list__button--remove js-remove">
           🗑
         </button>
      </li>
      `;
    }

    document.querySelector(".js-tasks").innerHTML = tasksListContent;

    bindToggleDoneEvents();
    bindremoveEvents();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newInput = document.querySelector(".js-newTask");
    const newTask = document.querySelector(".js-newTask").value.trim();

    if (newTask === "") {
      return;
    }
    addNewTask(newTask);
    newInput.value = "";
    newInput.focus;
  };

  const init = () => {
    render();

    const form = document.querySelector(".js-form");

    form.addEventListener("submit", onFormSubmit);
  };

  init();
}
