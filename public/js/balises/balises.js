 
export {divNum, inputCalc, divLigne1, divLigne2, divLigne3, divLigne4}
let section = document.createElement("section");
document.body.appendChild(section);
section.setAttribute("style", "display : flex; flex-direction : column; justifyContent : center");



let divInput = document.createElement("div");
divInput.setAttribute("style", "display : flex; justifyContent : center")
section.appendChild(divInput);

let inputCalc = document.createElement("input");
inputCalc.setAttribute("type", "text");
divInput.appendChild(inputCalc);


let divNum = document.createElement("div");
section.appendChild(divNum);
divNum.style.width= "min-content"


let divLigne1 = document.createElement("div");
divNum.appendChild(divLigne1);
divLigne1.setAttribute("class", "lignesBtn");

let divLigne2 = document.createElement("div");
divNum.appendChild(divLigne2);
divLigne2.setAttribute("class", "lignesBtn")

let divLigne3 = document.createElement("div");
divNum.appendChild(divLigne3);
divLigne3.setAttribute("class", "lignesBtn");

let divLigne4 = document.createElement("div");
divNum.appendChild(divLigne4);
divLigne4.setAttribute("class", "lignesBtn");


let btnC = document.createElement("button");
btnC.textContent = "C";
btnC.style.backgroundColor = "tomato"
divLigne4.appendChild(btnC);

let btnEgal = document.createElement("button");
btnEgal.textContent = "=";
btnEgal.style.backgroundColor = "chartreuse"
divLigne4.appendChild(btnEgal);

let compt = 0;
while (compt <= 9) {
    let btn = document.createElement("button");
    btn.textContent = `${compt}`;
    btn.setAttribute("class", "btnNum")
    console.log(btn)
    if(compt == 0){
        divLigne4.insertBefore(btn, btnEgal);
    }else if (compt <= 3 && compt != 0){
        divLigne3.appendChild(btn);}
    else if(compt <= 6){
        divLigne2.appendChild(btn);
    }else if(compt <= 9){
        divLigne1.appendChild(btn);
    };
    compt++;
}

let btnAdd = document.createElement("button");
btnAdd.textContent = "+";
btnAdd.setAttribute("class", "op");
divLigne1.appendChild(btnAdd);


let btnSoustr = document.createElement("button");
btnSoustr.textContent = "-";
btnSoustr.setAttribute("class", "op");
divLigne2.appendChild(btnSoustr);

let btnMult = document.createElement("button");
btnMult.textContent = "*"
btnMult.setAttribute("class", "op");
divLigne3.appendChild(btnMult);

let btnDiv = document.createElement("button");
btnDiv.textContent = "/" 
btnDiv.setAttribute("class", "op");
divLigne4.appendChild(btnDiv);
