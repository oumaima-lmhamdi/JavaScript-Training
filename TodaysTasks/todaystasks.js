const addTask = document.querySelector('.addTask');
const taskList = document.querySelector('.todolist');

const taskTemplate = task =>{
    const template = 
    `
    <li class="list-group-item d-flex justify-content-between align-items-center text-light">
        <span>${task}</span>
        <div>
            <i class="far fa-trash-alt delete"></i>
            <i class="far fa-check-circle done"></i>
        </div>
    </li>
    `;

    taskList.innerHTML+= template;
};

addTask.addEventListener('submit', e=>{
    e.preventDefault();

    const task = addTask.add.value.trim();

    if(task.length){
        taskTemplate(task);
        addTask.reset();
    }
});