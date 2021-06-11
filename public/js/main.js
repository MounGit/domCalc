import "./balises/balises.js";
import {divNum, inputCalc, divLigne1, divLigne2, divLigne3, divLigne4} from "./balises/balises.js"
let chiffre1;
let chiffre2; 
inputCalc.setAttribute("class", "focus")

divNum.addEventListener("click", (e)=>{
    
    if(e.target.textContent == "="){
        if(inputCalc.value.charAt(0) == "0" || inputCalc.value.charAt(0) == "+" || inputCalc.value.charAt(0) == "-" || inputCalc.value.charAt(0) == "*" || inputCalc.value.charAt(0) == "/" ){
            inputCalc.value = inputCalc.value.substr(1);
        };
        inputCalc.value = Math.round(eval(inputCalc.value))
    }else if(e.target == divLigne1 || e.target == divLigne2 || e.target == divLigne3 || e.target == divLigne4){
    }else if(e.target.textContent == "C"){
        inputCalc.value = inputCalc.value.slice(inputCalc.value.length);
    }else if(e.target.innerHTML != "+" || e.target.innerHTML != "-" || e.target.innerHTML != "*" || e.target.innerHTML != "/"){
        inputCalc.value += e.target.textContent;
    }
})




// divNum.addEventListener("click", (e)=>{
//     console.log(typeof e.target.textContent)
//     if(e.target.textContent == "="){
//         if(typeof Math.round(eval(inputCalc.value)) == "number"){
//             inputCalc.value = Math.round(eval(inputCalc.value))
//         }else{
//             inputCalc.value = "Error"
//         }
//     }else if(e.target == divLigne1 || e.target == divLigne2 || e.target == divLigne3 || e.target == divLigne4  ){
//     }else if(e.target.textContent == "C"){
//         inputCalc.value = inputCalc.value.slice(inputCalc.value.length);
//     }else if(e.target.innerHTML != "+" || e.target.innerHTML != "-" || e.target.innerHTML != "*" || e.target.innerHTML != "/"){
//         inputCalc.value += e.target.textContent;
//     }
// })
