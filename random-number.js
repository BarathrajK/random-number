// random number
var divEle=document.getElementById("text1")
var btnEle=document.getElementById("text")
function number(){
    let s = Math.floor(Math.random()*10)
console.log(s);
}
btnEle.addEventListener("click",number);