const numButtons = document.querySelectorAll(".numButton"); 
const operands = document.querySelectorAll(".operand");
const display = document.querySelector('.display');
const output = document.querySelector('.output');
const clearButton = document.querySelector('.clearButton');
const equalsButton = document.querySelector('.equalsButton');
var num1 = 0, num2 = 0; 

const displayNumber = () => {
    for (let i = 0; i < numButtons.length; i++) {
        output.innerHTML = " "; 
        numButtons[i].addEventListener('click', () => {
                output.innerHTML+=numButtons[i].innerHTML;
        });
    }
}
displayNumber();

const deleteNumber = () => {
    clearButton.addEventListener('click', () => {
        output.innerHTML = output.innerHTML.slice(0, -1);
    });
}
deleteNumber(); 

const clearNumbers = () => {
    let mouseTimer;
    function mouseDown() { 
        mouseUp();
        mouseTimer = window.setTimeout(execMouseDown,500); //set timeout to fire in 2 seconds when the user presses mouse button down
    }
  
    function mouseUp() { 
        if (mouseTimer) window.clearTimeout(mouseTimer);  //cancel timer when mouse button is released
    }
  
    function execMouseDown() { 
        output.innerHTML = " ";
    }

    clearButton.addEventListener("mousedown", mouseDown);
    clearButton.addEventListener("mouseup", mouseUp);  //listen for mouse up event on body, not just the element you originally clicked on
  };
clearNumbers();

const getNumbers = () => {
    for (let i = 0; i < operands.length; i++) {
        operands[i].addEventListener('click', () => {
            if (num2) {
                num2 = output.innerHTML; 
                output.innerHTML = " ";            
            } else {
                num1=output.innerHTML; 
                output.innerHTML = " ";
            }
         });
    }
    return num1, num2; 

}
getNumbers(); 

console.log(getNumbers());