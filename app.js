let lenth = document.querySelector("#length");
let breath = document.querySelector("#breath");
let result = document.querySelector("#result");
let btn = document.querySelector("#btn");

btn.addEventListener("click", ()=>{ 
   
let lenth1 = parseFloat(lenth.value);
let breath1 =parseFloat(breath.value);

if(isNaN(lenth1) || isNaN(breath1)){
    result.textContent="please put valid numbers";
}else{
    let result1 = lenth1*breath1;
    result.textContent= `The result is ${result1}`;
}

});

