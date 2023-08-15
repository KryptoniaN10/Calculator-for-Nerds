function add(num1,num2){
  let result=num1+num2;
   return result
}
function sub(num1,num2){
   let  result=num1-num2;
    return result
 }
 function mul(num1,num2){
   let  result=num1*num2;
    return result
 }
 function div(num1,num2){
   let  result=num1/num2;
    return result
 }
 document.getElementById("AddButton").onclick=function(){
    let n1=Number(document.getElementById("firstNuminput").value)
    let n2=Number(document.getElementById("secondNuminput").value)
    document.getElementById("Result").innerHTML ="Result:"+String(add(n1,n2))
 }
 document.getElementById("subButton").onclick=function(){
    let n1=Number((document.getElementById("firstNuminput").value))
    let n2=Number((document.getElementById("secondNuminput").value))
    document.getElementById("Result").innerHTML ="Result:"+String(sub(n1,n2))
 }
 document.getElementById("MulButton").onclick=function(){
   let n1=Number((document.getElementById("firstNuminput").value))
   let n2=Number((document.getElementById("secondNuminput").value))
   document.getElementById("Result").innerHTML ="Result:"+String(mul(n1,n2))
}
document.getElementById("DivButton").onclick=function(){
   let n1=Number((document.getElementById("firstNuminput").value))
   let n2=Number((document.getElementById("secondNuminput").value))
   document.getElementById("Result").innerHTML ="Result:"+String(div(n1,n2))
}