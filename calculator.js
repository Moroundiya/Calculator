
const buttons = document.querySelectorAll('button');
const display = document.getElementById("displayvalue");


buttons[0].addEventListener("click", function(){
    display.value = '';
})

buttons[1].addEventListener("click", function(){
    display.value=Math.sqrt(display.value)

})

buttons[2].addEventListener("click", function(){
    display.value *= display.value;
})

buttons[3].addEventListener("click", function(){
    display.value += '/';
})

buttons[4].addEventListener("click", function(){
    display.value += '7';
})

buttons[5].addEventListener("click", function(){
    display.value += '8';
})

buttons[6].addEventListener("click", function(){
    display.value += '9';
})

buttons[7].addEventListener("click", function(){
    display.value += '*';
})

buttons[8].addEventListener("click", function(){
    display.value += '4';
})

buttons[9].addEventListener("click", function(){
    display.value += '5';
})

buttons[10].addEventListener("click", function(){
    display.value += '6';
})

buttons[11].addEventListener("click", function(){
    display.value += '-';
})

buttons[12].addEventListener("click", function(){
    display.value += '1';
})

buttons[13].addEventListener("click", function(){
    display.value += '2';
})

buttons[14].addEventListener("click", function(){
    display.value += '3';
})

buttons[15].addEventListener("click", function(){
    display.value += '+';
})

buttons[16].addEventListener("click", function(){
    display.value += '0';
})

buttons[17].addEventListener("click", function(){
    display.value += '.';
})

buttons[18].addEventListener("click", function(){
    display.value = eval(display.value);
})



