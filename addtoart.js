let addbtn1=document.getElementById('add-btn1');
let addbtn2=document.getElementById('add-btn2');
let increaseCount=document.getElementById('count');

let count=0

function addToCart(){
    count++;
    increaseCount.innerText=count;

}

addbtn1.addEventListener('click',addToCart);
addbtn2.addEventListener('click',addToCart);

