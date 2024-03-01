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

  const render = () => {
    let tasksListContent = "";

    for (const task of tasks) {
      tasksListContent += `
     <li 
      class="list__item${task.done ? " list__item--done" : ""}">
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

    const removeButtons = document.querySelectorAll(".js-remove");

    removeButtons.forEach((removeButon, index) => {
      removeButon.addEventListener("click", () => {
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
