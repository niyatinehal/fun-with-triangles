const input= document.querySelectorAll(".inputText");
const checkButton= document.querySelector("#check-triangle-btn");
const outputMsg= document.querySelector("#output");

function calculateSum(angle1, angle2, angle3){
    const sumOfAngles=angle1+angle2+angle3;
    return sumOfAngles;

}


function isItTriangle(){
    var angle1=Number(input[0].value);
    var angle2=Number(input[1].value);
    var angle3=Number(input[2].value);
    const sumOfAngles= calculateSum(angle1,angle2,angle3);
    if(angle1<0 || angle2<0 || angle3<0)
    {
        outputMsg.innerText="Please enter a valid input";
    }else if(sumOfAngles===180)
          {
             // console.log("Yay! Triangle is made.")
              outputMsg.innerText="Yay! Triangle is made."
           }else
               {
                 // console.log("Oops! Not the triangle we want.")
                  outputMsg.innerText="Oops! Not the triangle we want"
                }
     
    
}

checkButton.addEventListener('click', isItTriangle);

