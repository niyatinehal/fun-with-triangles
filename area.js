const sideLength= document.querySelectorAll(".length");
const findAreaBtn= document.querySelector("#find-area");
const outputMsg=document.querySelector(".output");

function calculateProduct(a,b){
    const product=a*b;
    return product;
}

function calculateArea(){
    const product=calculateProduct(Number(sideLength[0].value), Number(sideLength[1].value));
    const area=1/2*product;
    console.log(area);
    outputMsg.innerText="Area of Triangle= " + area;
}

findAreaBtn.addEventListener('click', calculateArea)