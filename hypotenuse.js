const sideLength=document.querySelectorAll(".side-input");
const findHypotenuseBtn=document.querySelector("#hypotenuse-btn");
const outputMsg= document.querySelector("#output");

function calculateSumOfSquares(a,b){
    const sumOfSides=(a*a)+(b*b);
    console.log(sumOfSides);
      return sumOfSides;
}

function calculateHypotenuse(){

    const sumOfSquares=calculateSumOfSquares(Number(sideLength[0].value),Number(sideLength[1].value));
    const lengthOfHypotenuse=Math.sqrt(sumOfSquares);
    console.log(lengthOfHypotenuse);
    outputMsg.innerText="Hypoteneuse length= " + lengthOfHypotenuse;

}

findHypotenuseBtn.addEventListener("click",calculateHypotenuse );