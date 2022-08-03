const quizForm= document.querySelector(".quiz-form");
const submitBtn= document.querySelector("#submit-btn");
const output=document.querySelector("#out");

const correctAnswers=["90 degree","right angled triangle"];

function calculateScore(){
      let score=0;
      let index=0;
      const formResults=new FormData(quizForm);
      for(let value of formResults.values()){
        if(value===correctAnswers[index])
        {
            score=score+1;
        }
        index=index+1;
      }
    output.innerText="Your score is "+ score;
}

submitBtn.addEventListener('click',calculateScore);