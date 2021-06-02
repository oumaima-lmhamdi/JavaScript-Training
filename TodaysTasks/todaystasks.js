const addTask = document.querySelector('.addTask');
const taskList = document.querySelector('.todolist');
const liTask = document.querySelector('li');


// Add task

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


addTask.addEventListener('submit', e=>{
    e.preventDefault();

    Add();    
});

// delete or mark tasks as done

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