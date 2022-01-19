/*
function answerofexpression() {
    let displaytext = (document.getElementById('answer').value);
    let finalans = Number(eval(displaytext));
    document.getElementById('ans').innerHTML= finalans;
}
*/

function calc() {
    let inputext = (document.getElementById("answer").value);
    const array = inputext.split("");
    string = String(array);
    number = string.replace( /,/g, "");

    if(number.includes("+") === true) {
        plus(); //plus function call
    }
    else if(number.includes("-") === true) {
        minus();  // minus function call
    }
    else if(number.includes("*") === true) {
        multiply(); // multiply function call
    }
    else if(number.includes("/") === true) {
        division(); //division function call
    }
    else if(number.includes("%") === true) {
        modulo(); // modulo function call
    }
}

function plus() {
    let inputext = (document.getElementById("answer").value);
    const array = inputext.split("");
    string = String(array);
    number = string.replace( /,/g, "");
    //opratorindex
    let operatorindex = number.indexOf("+");; 

    //firstoprand
    firstoprand = array.slice(0, operatorindex);
    firstoprandstring = String(firstoprand);
    let firstoprandnumber = Number(firstoprandstring.replace( /,/g, ""))
    
    //secondoprand
    secondoprand = array.slice(operatorindex + 1, )
    secondoprandstring = String(secondoprand);
    let secondoprandnumber = Number(secondoprandstring.replace( /,/g, ""))
    
    //result
    let result = firstoprandnumber + secondoprandnumber;
    document.getElementById("ans").innerHTML = result; 
} 

function minus() {
    let inputext = (document.getElementById("answer").value);
    const array = inputext.split("");
    string = String(array);
    number = string.replace( /,/g, "");
    //opratorindex
    let operatorindex = number.indexOf("-");; 

    //firstoprand
    firstoprand = array.slice(0, operatorindex);
    firstoprandstring = String(firstoprand);
    let firstoprandnumber = Number(firstoprandstring.replace( /,/g, ""))
    
    //secondoprand
    secondoprand = array.slice(operatorindex + 1, )
    secondoprandstring = String(secondoprand);
    let secondoprandnumber = Number(secondoprandstring.replace( /,/g, ""))
    
    //result
    let result = firstoprandnumber - secondoprandnumber;
    document.getElementById("ans").innerHTML = result; 
} 

function multiply() {
    let inputext = (document.getElementById("answer").value);
    const array = inputext.split("");
    string = String(array);
    number = string.replace( /,/g, "");
    //opratorindex
    let operatorindex = number.indexOf("*");; 

    //firstoprand
    firstoprand = array.slice(0, operatorindex);
    firstoprandstring = String(firstoprand);
    let firstoprandnumber = Number(firstoprandstring.replace( /,/g, ""))
    
    //secondoprand
    secondoprand = array.slice(operatorindex + 1, )
    secondoprandstring = String(secondoprand);
    let secondoprandnumber = Number(secondoprandstring.replace( /,/g, ""))
    
    //result
    let result = firstoprandnumber * secondoprandnumber;
    document.getElementById("ans").innerHTML = result; 
} 

function division() {
    let inputext = (document.getElementById("answer").value);
    const array = inputext.split("");
    string = String(array);
    number = string.replace( /,/g, "");
    //opratorindex
    let operatorindex = number.indexOf("/");; 

    //firstoprand
    firstoprand = array.slice(0, operatorindex);
    firstoprandstring = String(firstoprand);
    let firstoprandnumber = Number(firstoprandstring.replace( /,/g, ""))
    
    //secondoprand
    secondoprand = array.slice(operatorindex + 1, )
    secondoprandstring = String(secondoprand);
    let secondoprandnumber = Number(secondoprandstring.replace( /,/g, ""))
    
    //result
    let result = firstoprandnumber / secondoprandnumber;
    document.getElementById("ans").innerHTML = result; 
} 

function modulo() {
    let inputext = (document.getElementById("answer").value);
    const array = inputext.split("");
    string = String(array);
    number = string.replace( /,/g, "");
    //opratorindex
    let operatorindex = number.indexOf("%");; 

    //firstoprand
    firstoprand = array.slice(0, operatorindex);
    firstoprandstring = String(firstoprand);
    let firstoprandnumber = Number(firstoprandstring.replace( /,/g, ""))
    
    //secondoprand
    secondoprand = array.slice(operatorindex + 1, )
    secondoprandstring = String(secondoprand);
    let secondoprandnumber = Number(secondoprandstring.replace( /,/g, ""))
    
    //result
    let result = firstoprandnumber % secondoprandnumber;
    document.getElementById("ans").innerHTML = result; 
} 

function reset() {
    let displaytext = (document.getElementById('answer').value);
    displaytext = " ANSWER ";
    document.getElementById("ans").innerHTML = displaytext;
}

function back() {
    let displaytext = (document.getElementById('answer').value);
    const array = displaytext.split("");
    const newarray = array.pop();
    string = String(array);
    number = string.replace( /,/g, "");
    answer.value = number;
}