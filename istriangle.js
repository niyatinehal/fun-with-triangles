const input= document.querySelectorAll(".inputText");
const checkButton= document.querySelector("#check-triangle-btn");
const outputMsg= document.querySelector("#output");

function calculateSum(angle1, angle2, angle3){
    const sumOfAngles=angle1+angle2+angle3;
    return sumOfAngles;

}


function isItTriangle(){
    const sumOfAngles= calculateSum(Number(input[0].value),Number(input[1].value),Number(input[2].value));
     
    if(sumOfAngles===180){
        // console.log("Yay! Triangle is made.")
        outputMsg.innerText="Yay! Triangle is made."
    }else{
        // console.log("Oops! Not the triangle we want.")
        outputMsg.innerText="Oops! Not the triangle we want"
    }
}

checkButton.addEventListener('click', isItTriangle);

