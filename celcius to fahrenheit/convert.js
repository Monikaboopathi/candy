function convert(){
let cel=Number(document.getElementById("input").value)
let fa=((cel*9/5)+32);
let result=document.getElementById("result")
result.innerHTML=fa.toFixed(3)+" "+"fahrenhit";
}


// finished project ans correct executed
