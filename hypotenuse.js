const sideLength=document.querySelectorAll(".side-input");
const findHypotenuseBtn=document.querySelector("#hypotenuse-btn");
const outputMsg= document.querySelector("#output");

function calculateSumOfSquares(a,b){
    const sumOfSides=(a*a)+(b*b);
    console.log(sumOfSides);
      return sumOfSides;
}

function calculateHypotenuse(){
    var length=Number(sideLength[0].value);
    var height=Number(sideLength[1].value);
    if(length && height)
    {
        if(length<0 || height<0){
        outputMsg.innerText="Please enter a valid input"
    }else{
           const sumOfSquares=calculateSumOfSquares(length,height);
           const lengthOfHypotenuse=Math.sqrt(sumOfSquares);
           console.log(lengthOfHypotenuse);
           outputMsg.innerText="Hypoteneuse length= " + lengthOfHypotenuse;
    }
    }
    else{
        outputMsg.style.color="red";
        outputMsg.innerText="Please enter a vlaid text!";
    }
    

    

}

findHypotenuseBtn.addEventListener("click",calculateHypotenuse );