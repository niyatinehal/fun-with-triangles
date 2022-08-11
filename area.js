const sideLength= document.querySelectorAll(".length");
const findAreaBtn= document.querySelector("#find-area");
const outputMsg=document.querySelector(".output");

function calculateProduct(a,b){
    const product=a*b;
    return product;
}

function calculateArea(){
    var length=Number(sideLength[0].value);
    var height=Number(sideLength[1].value);
    const product=calculateProduct(length,height);
    if(length<0 || height<0)
    {
        outputMsg.innerText="Please enter a valid input";
    }else{
        const area=1/2*product;
        console.log(area);
        outputMsg.innerText="Area of Triangle= " + area;
    }
    
}

findAreaBtn.addEventListener('click', calculateArea)