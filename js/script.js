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

  const render = () => {
    let tasksListContent = "";

    for (const task of tasks) {
      tasksListContent += `
     <li 
     <span
      class="list__item${task.done ? " list__item--done" : ""}">${task.content}
     </span>
     </li>
      `;
    }

    document.querySelector(".js-tasks").innerHTML = tasksListContent;
  };

  const addNewTask = (newTask) => {
    tasks.push({ content: newTask });

    render();
  };

  const init = () => {
    render();

    const form = document.querySelector(".js-form");

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const newTask = document.querySelector(".js-newTask").value.trim();

      if (newTask === "") {
        return;
      }
      addNewTask(newTask);
    });
  };

  init();
}
