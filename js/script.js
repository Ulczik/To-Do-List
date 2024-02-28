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
     <li>
     ${task.content}
     </li>
      `;
    }

    document.querySelector(".js-tasks").innerHTML = tasksListContent;
  };

  const init = () => {
    render();
  };

  init();
}
