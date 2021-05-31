const form = document.querySelector('form');
const correctAnswers = ['d','a','b','a','b','a','c','b','c','b'];

form.addEventListener('submit', e =>{
    e.preventDefault();
    const answers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value,form.q6.value,form.q7.value,form.q8.value,form.q9.value,form.q10.value];

    let score = 0;
    answers.forEach((answer, index)=>{
        if(answer === correctAnswers[index]){
            score +=10; 
        }
    });
    // Display score
    const scoreResult = document.querySelector('.score');
    scoreResult.querySelector('span').textContent = `${score}%`;
    scoreResult.classList.remove('d-none');
});


