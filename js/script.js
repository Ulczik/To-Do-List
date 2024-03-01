{
  let tasks = [
    {
      content: "tra la la",
      done: true,
    },

    {
      content: "bla bla",
      done: false,
    },
  ];

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

  const render = () => {
    let tasksListContent = "";

    for (const task of tasks) {
      tasksListContent += `
     <li 
      class="list__item${task.done ? " list__item--done" : ""}">
      <button class="list__button list__button--toggleDone js-toggleDone">
        zrobione?
      </button>
      <span>
        ${task.content}
      </span>
      <button class="list__button list__button--remove js-remove">
        🗑
      </button>
     </li>
      `;
    }

    document.querySelector(".js-tasks").innerHTML = tasksListContent;

    const toggleDoneButtons = document.querySelectorAll(".js-toggleDone");

    toggleDoneButtons.forEach((toggleDoneButton, index) => {
      toggleDoneButton.addEventListener("click", () => {
        toggleTaskDone(index);
      });
    });

    const removeButtons = document.querySelectorAll(".js-remove");

    removeButtons.forEach((removeButton, index) => {
      removeButton.addEventListener("click", () => {
        removeTask(index);
      });
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTask = document.querySelector(".js-newTask").value.trim();

    if (newTask === "") {
      return;
    }
    addNewTask(newTask);
  };

  const init = () => {
    render();

    const form = document.querySelector(".js-form");

    form.addEventListener("submit", onFormSubmit);
  };

  init();
}
