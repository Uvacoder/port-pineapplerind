/* JavaScript by PineappleRind (pineapplerind.github.io), 2020. 
Use with permission. */


let clear = document.getElementById('clearBtn');
let backspace = document.getElementById('backspace');

let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let zero = document.getElementById('zero');

let equation = '';

let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let divide = document.getElementById('divide');
let times = document.getElementById('times');

let pi = document.getElementById('pi');

let decimal = document.getElementById('decimal');
let equals = document.getElementById('equals');

let output = document.querySelector('#calculatorOutput');

let add = false;

function removeLastDigit(t) {
    let strng = t.value;
    return strng.substring(0,strng.length-1);
}

function evaluateInts(u) {
    return eval(u);
}

clear.addEventListener('click', function() {
    output.style.animationName = 'kern-out';
    setTimeout(function() {
        output.value = '';
        output.style.animationName = '';
        equation = output.value;
    },200)
})

backspace.addEventListener('click', function() {
    output.value = removeLastDigit(output);
}) 

one.addEventListener('click', function() {
    equation += '1';
    output.value += '1';
})
two.addEventListener('click', function() {
    equation += '2';
    output.value += '2';
})
three.addEventListener('click', function() {
    equation += '3';
    output.value += '3';
})
four.addEventListener('click', function() {
    equation += '4';
    output.value += '4';
})
five.addEventListener('click', function() {
    equation += '5';
    output.value += '5';
})
six.addEventListener('click', function() {
    equation += '6';
    output.value += '6';
})
seven.addEventListener('click', function() {
    output.value += '7';
    equation += '7';
})
eight.addEventListener('click', function() {
    equation += '8';
    output.value += '8';
})
nine.addEventListener('click', function() {
    output.value += '9';
    equation += '9';
})
zero.addEventListener('click', function() {
    output.value += '0';
    equation += '0';
})



plus.addEventListener('click', function() {
    output.value += '+';
    equation += '+';
})
minus.addEventListener('click', function() {
    output.value += '-';
    equation += '-';
})
times.addEventListener('click', function() {
    output.value += '×';
    equation += '*';
})
divide.addEventListener('click', function() {
    output.value += '÷';
    equation += '/'
})



pi.addEventListener('click', function() {
    output.value += 'π';
    equation += ' 3.14159265358979323 ';
})

decimal.addEventListener('click', function() {
    output.value += '.';
    equation += '.';
})
equals.addEventListener('click', function() {
    output.value = evaluateInts(equation);
    equation = output.value;
})

window.onerror=function(msg, url, linenumber){
    output.value = 'Error code: -1';
}

let num = parseInt(output.value);

if (num > 10000000000) {
    output.value = 'Error code: 1';
}

if (num < -1000000000) {
    output.value = 'Error code: 2';
}

// Now for settings modal.

function settings() {
    let modal = document.getElementById('settingsModal');
    modal.style.display = 'block';
    modal.style.animationName = 'bounce-in';

    setTimeout(function(){
        modal.style.animationName = '';
    }, 1000)

    let overlay = document.getElementById('overlayBlack');
    overlay.style.display = 'block';
    setTimeout(function(){
        overlay.style.opacity = '1';
    }, 100)
}

function settingsClose() {
    let modal = document.getElementById('settingsModal');
    modal.style.animationName = 'float-out';

    setTimeout(function(){
        modal.style.display = 'none';
        modal.style.animationName = '';
    }, 500)

    let overlay = document.getElementById('overlayBlack');
    overlay.style.opacity = '0';

    setTimeout(function(){
        overlay.style.display = 'none';
    }, 500)
}

let closeButton = document.querySelector('.modal-close');
closeButton.addEventListener('click', function() {
    settingsClose();
})

let settingsBtn = document.getElementById('settings');
settingsBtn.addEventListener('click', function() {
    settings();
})


let science = document.getElementById('scientific');
let arith = document.getElementById('arithmetc');
let thebuttons = document.getElementById('scientificWrap');

function checkForScience() {
    if (science.checked === true) {
        thebuttons.style.display = 'block';
        document.querySelector('.calculator').style.maxWidth = '500px';
        document.querySelector('.calculator-buttons').style.width = '50%';
    } else if (arithmetic.checked === true) {
        thebuttons.style.display = 'none';
    }
}

oninput = e => {
    checkForScience();
}

onclick = e => {
    let t = equation;
    setTimeout(function() {
        if (equation === '') {
            t = 'No equation'
        }
        console.log('Current equation: ' + t);
    }, 1)
    console.clear();
}

console.log('No equation');

window.addEventListener("keydown", function(e) {
    if (e.key === 'a') {
        window.addEventListener("keydown", function(e) {
            if (e.key === 's') {
                window.addEventListener("keydown", function(e) {
                    if (e.key === 'd') {
                        window.addEventListener("keydown", function(e) {
                            if (e.key === 'f') {
                                window.location.href = "https://www.youtube.com/watch?v=oHg5SJYRHA0";
                            }
                        })
                    }
                })
            }
        })
    }
})