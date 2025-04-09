import { invoke } from "@tauri-apps/api/core";

const display = document.getElementById("display");
let isOpenParenthesis = true;

window.appendToDisplay = function(input){
    

  if(input === '()'){

    display.value += isOpenParenthesis ? '(' : ')';
    isOpenParenthesis = !isOpenParenthesis;
    return;
  }
  
  // if(input === '+/-'){
  // }
  else{
    display.value += input;
  }

}

window.clearDisplay = function(){

  display.value = "";
}

window.calculate = function(){

  let expression = display.value
    .replace(/×/g, '*')
    .replace(/÷/g, '/')
    .replace(/−/g, '-')
    .replace(/%/g, '/100')

  display.value = eval(expression);
}
