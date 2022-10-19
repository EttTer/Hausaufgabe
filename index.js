console.log('funguju!');

const Task = (props) => {

    const {done, due, id, name} = props;
return `<div class="todo__tasks">
<div class="task">
<div class="task__body">
  <div class="task__name">${name}</div>
  <div class="task__due">${due}</div>
</div>
<div class="task__done">${done}</div>
</div>`;
};



const renderTasks = (tasks) => {
    const taskElm = document.querySelector(".task");
    taskElm.innerHTML= tasks
    .map((t) => Task(t))
    .join("");
};



/* Vypíšeme všechny pole do konzole

fetch('https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks')
.then((response)=> {
    return response.json();
})
.then((data)=> console.log(data));*/


fetch('https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks')
.then((response)=> {
    return response.json();
})
.then(renderTasks);