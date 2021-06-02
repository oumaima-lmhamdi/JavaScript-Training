const addTask = document.querySelector('.addTask');
const taskList = document.querySelector('.todolist');
const liTask = document.querySelector('li');
const searchBar = document.querySelector('.searchBar input');


//Add task

const Add = () =>{

    const li = document.createElement('li');
    li.textContent = addTask.add.value.trim();
    if(li.textContent.length){

        taskList.prepend(li);
        let classesToAdd = ['list-group-item', 'd-flex', 'justify-content-between', 'align-items-center', 'text-light'];
        li.classList.add(...classesToAdd);
        addTask.reset();

        const template = 
        `
        <div>
            <i class="far fa-trash-alt delete"></i>
            <i class="far fa-check-circle done"></i>
        </div>

        `;

        li.innerHTML+= template;

        console.log(li.textContent);

    }
    
};

//Submit event
addTask.addEventListener('submit', e=>{
    e.preventDefault();

    Add();    
});

// Delete or mark tasks as done

taskList.addEventListener('click', e=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.parentElement.remove();
    }

    if(e.target.classList.contains('done')){
        e.target.parentElement.parentElement.style.textDecoration = 'line-through solid rgb(255, 255, 255)';
        e.target.parentElement.parentElement.style.background = 'pink';
        taskList.append(e.target.parentElement.parentElement);    
    } 
});

//Find a task

const findTask = (term)=>{
    //Hide a task
    Array.from(taskList.children)
    .filter(task =>!task.textContent.toLowerCase().includes(term))
    .forEach(task => task.classList.add('d-none'))

    //Display a task
    Array.from(taskList.children)
    .filter(task =>task.textContent.toLowerCase().includes(term))
    .forEach(task => task.classList.remove('d-none'))

};

//Keyup event
searchBar.addEventListener('keyup', ()=>{
    const term = searchBar.value.trim().toLowerCase();
    findTask(term);
});

