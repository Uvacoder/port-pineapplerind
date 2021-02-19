/************************************************************************************************************
                                            Random JavaScript Game
                                            Made by PineappleRind
                                        https://pineapplerind.github.io
                                                     2020
************************************************************************************************************/






function setCookie(e, t) {
    document.cookie = e + "=" + t + ",expires=864000;"
}

function getCookie(e) {
    for (var t = e + "=", n = decodeURIComponent(document.cookie).split(";"), o = 0; o < n.length; o++) {
        for (var l = n[o];
            " " == l.charAt(0);) l = l.substring(1);
        if (0 == l.indexOf(t)) return l.substring(t.length, l.length)
    }
    return ""
}
let btn = document.getElementById("close"),
    modal = document.querySelector(".modal-bg");
btn.addEventListener("click", function() {
    setCookie("tutorial", "true"), closeModal(modal)
}), "true,expires=864000" === getCookie("tutorial") && (modal.style.display = "none"), window.onload = function() {
    let e = document.getElementsByClassName("ripple-button");
    for (var t = 0; t < e.length; t++) e[t].onclick = function(e) {
        let t = e.pageX - this.offsetLeft,
            n = e.pageY - this.offsetTop,
            o = document.createElement("div");
        o.classList.add("ripple"), o.setAttribute("style", "top:" + n + "px; left:" + t + "px;");
        let l = this.getAttribute("ripple-color");
        l && (o.style.background = l), this.appendChild(o), setTimeout(function() {
            o.parentElement.removeChild(o)
        }, 900)
    }
};
let settingsOpen = document.getElementById("settings"),
    settingsModal = document.querySelector(".settings-modal-bg"),
    settingsClose = document.getElementById("closeSettings");

function closeModal(e) {
    e.style.opacity = "0", setTimeout(function() {
        e.style.display = "none"
    }, 500)
}

function openModal(e) {
    e.style.display = "flex", setTimeout(function() {
        e.style.opacity = "1"
    }, 10)
}
settingsOpen.addEventListener("click", function() {
    openModal(settingsModal)
}), settingsClose.addEventListener("click", function() {
    closeModal(settingsModal)
});
let button = document.querySelector(".ripple-button"),
    i = 0,
    counter = document.getElementById("counter"),
    j = 0,
    counterCPU = document.getElementById("counterCPU");

function updateCounters() {
    "major" === probabillity() ? (i += getRandomInt(20), counter.innerHTML = i, j += getRandomInt(10), counterCPU.innerHTML = j) : "regular" === probabillity() ? (i += getRandomInt(15), counter.innerHTML = i, j += getRandomInt(10), counterCPU.innerHTML = j) : (i += getRandomInt(10), counter.innerHTML = i, j += getRandomInt(10), counterCPU.innerHTML = j)
}
button.addEventListener("click", () => {
    updateCounters(), checkForWinner(), goalFunction()
});
let yourScore = document.getElementById("yourScore"),
    cpuScore = document.getElementById("cpuScore"),
    winnerText = document.getElementById("winnertext");
winnerText.style.display = "none";
let goal = 500;

function checkForWinner() {
    if (i >= j ? (cpuScore.style.color = "red", yourScore.style.transform = "scale(1.1)", cpuScore.style.transform = "scale(1)", yourScore.style.color = "green", winnerText.innerHTML = "You win!") : j > i && (cpuScore.style.color = "green", yourScore.style.color = "red", cpuScore.style.transform = "scale(1.1)", yourScore.style.transform = "scale(1)", winnerText.innerHTML = "Cpu wins!"), i > goal || j > goal) return button.style.pointerEvents = "none", winnerText.style.display = "block", winnerText.style.animationName = "bounce", !1
}

function goalFunction() {
    let e = document.getElementById("goal");
    goal = parseInt(e.value), setTimeout(function() {
        document.getElementById("number").innerHTML = goal
    }, 10)
}

function autoInit() {
    let e = setInterval(function() {
        updateCounters(), checkForWinner(), (i > 500 || j > 500) && clearInterval(e)
    }, 100)
}
let autoBox = document.getElementById("auto");

function getRandomInt(e) {
    return Math.floor(Math.random() * e + 1)
}

function probabillity() {
    let e = document.getElementById("slightProb");
    return !0 === document.getElementById("majorProb").checked ? "major" : !0 === e.checked ? "slight" : "regular"
}

function autoIfs() {
    if (!0 === autoBox.checked) {
        let e = document.getElementById("autoInit");
        e.style.display = "block", e.addEventListener("click", function() {
            autoInit(), e.style.display = "none"
        }), document.getElementById("sliderContainer").style.display = "inline"
    } else !1 === autoBox.checked && (document.getElementById("sliderContainer").style.display = "none", autoButton.style.display = "none")
}

function lazyFunction() {
    goalFunction(), autoIfs(), probabillity()
}

function lazyAuto() {
    updateCounters(), checkForWinner(), autoStop()
}
oninput = (() => {
    lazyFunction()
});







/******************************************************************************************************
                                            JavaScript Calculator
                                            Made by PineappleRind
                                https://pineapplerind.github.io/calculator
                                                    2020
*******************************************************************************************************/









let clear = document.getElementById("clearBtn"),
    backspace = document.getElementById("backspace"),
    one = document.getElementById("one"),
    two = document.getElementById("two"),
    three = document.getElementById("three"),
    four = document.getElementById("four"),
    five = document.getElementById("five"),
    six = document.getElementById("six"),
    seven = document.getElementById("seven"),
    eight = document.getElementById("eight"),
    nine = document.getElementById("nine"),
    zero = document.getElementById("zero"),
    equation = "",
    plus = document.getElementById("plus"),
    minus = document.getElementById("minus"),
    divide = document.getElementById("divide"),
    times = document.getElementById("times"),
    pi = document.getElementById("pi"),
    decimal = document.getElementById("decimal"),
    equals = document.getElementById("equals"),
    output = document.querySelector("#calculatorOutput");

function removeLastDigit(e) {
    var t = e;
    return t.substring(0, t.length - 1)
}

function evaluateInts(u) {
    return eval(u)
}
clear.addEventListener("click", function() {
    output.style.animationName = "kern-out", setTimeout(function() {
        output.value = "", output.style.animationName = "", equation = output.value
    }, 200)
}), backspace.addEventListener("click", function() {
    output.value = removeLastDigit(output.value), equation = removeLastDigit(equation)
}), one.addEventListener("click", function() {
    equation += "1", output.value += "1"
}), two.addEventListener("click", function() {
    equation += "2", output.value += "2"
}), three.addEventListener("click", function() {
    equation += "3", output.value += "3"
}), four.addEventListener("click", function() {
    equation += "4", output.value += "4"
}), five.addEventListener("click", function() {
    equation += "5", output.value += "5"
}), six.addEventListener("click", function() {
    equation += "6", output.value += "6"
}), seven.addEventListener("click", function() {
    output.value += "7", equation += "7"
}), eight.addEventListener("click", function() {
    equation += "8", output.value += "8"
}), nine.addEventListener("click", function() {
    output.value += "9", equation += "9"
}), zero.addEventListener("click", function() {
    output.value += "0", equation += "0"
}), plus.addEventListener("click", function() {
    output.value += "+", equation += "+"
}), minus.addEventListener("click", function() {
    output.value += "-", equation += "-"
}), times.addEventListener("click", function() {
    output.value += "×", equation += "*"
}), divide.addEventListener("click", function() {
    output.value += "÷", equation += "/"
}), pi.addEventListener("click", function() {
    output.value += "π", equation += " 3.14159265358979323846264338327950288419716939937510582097494459230781640628620899862803482534211706798214808651328230664709384460955058223172535940812848111745028410270193852110555964462294895493038196442881097566593344612847564823378678316527120190914564856692346034861045432664821339360726024914127372458700660631558817488152092096282925409171536436789259036001133053054882046652138414695194151160943305727036575959195309218611738193261179310511854807446237996274956735188575272489122793818 "
}), decimal.addEventListener("click", function() {
    output.value += ".", equation += "."
}), equals.addEventListener("click", function() {
    output.value = evaluateInts(equation), equation = output.value
}), window.onerror = function(e, t, n) {
    output.value = "Error code: -1"
};
var num = parseInt(output.value);

function settings() {
    open(document.getElementById("settingsModal"), 1e3);
    var e = document.getElementById("overlayBlack");
    e.style.display = "block", setTimeout(function() {
        e.style.opacity = "1"
    }, 100)
}

function settingsCloser() {
    close(document.getElementById("settingsModal"), 500);
    var e = document.getElementById("overlayBlack");
    e.style.opacity = "0", setTimeout(function() {
        e.style.display = "none"
    }, 500)
}
num > 1e10 && (output.value = "Error code: 1"), num < -1e9 && (output.value = "Error code: 2");
var closeButton = document.querySelector(".modal-close");
closeButton.addEventListener("click", function() {
    settingsCloser()
});
var settingsBtn = document.getElementById("settings");
settingsBtn.addEventListener("click", function() {
    settings()
});
let calc = document.querySelector(".calculator"),
    color = document.getElementById("bgColor");
oninput = (e => {
    calc.style.backgroundColor = color.value
}), onclick = (e => {
    var t = equation;
    setTimeout(function() {
        "" === equation && (t = "No equation"), console.log("Current equation: " + t)
    }, 1), console.clear()
}), console.log("No equation"), window.addEventListener("keydown", function(e) {
    "a" === e.key && window.addEventListener("keydown", function(e) {
        "s" === e.key && window.addEventListener("keydown", function(e) {
            "d" === e.key && window.addEventListener("keydown", function(e) {
                "f" === e.key && (window.location.href = "https://www.youtube.com/watch?v=oHg5SJYRHA0")
            })
        })
    })
});
let pog = document.getElementById("poggers"),
    box = document.querySelector(".hidden-box");

function pogChamp() {
    open(pog), setTimeout(function() {
        close(pog, 1e3)
    }, 3e3)
}

function open(e) {
    e.style.display = "block", e.style.animationName = "bounce-in"
}

function close(e, t) {
    e.style.animationName = "float-out", setTimeout(function() {
        e.style.display = "none", e.style.animationName = ""
    }, t)
}
box.addEventListener("click", function() {
    box.addEventListener("click", function() {
        box.addEventListener("click", function() {
            pogChamp()
        })
    })
}), document.onkeypress = function(e) {
    var t = (e = e || window.event).keyCode || e.which,
        n = String.fromCharCode(t);
    "1" == n || "2" == n || "3" == n || "4" == n || "5" == n || "6" == n || "7" == n || "8" == n || "9" == n || "+" == n || "-" == n ? (output.value += n, equation += n) : "13" == t || "=" == n ? (output.value = evaluateInts(equation), equation = output.value) : "*" == n ? (equation += "*", output.value += "×") : "/" == n ? (equation += "/", output.value += "÷") : "Backspace" == n && (removeLastDigit(equation), removeLastDigit(output.value))
};


/******************************************************************************************************
                                              Password Generator
                                            Made by PineappleRind
                                https://pineapplerind.github.io/password-generator
                                                    2020
*******************************************************************************************************/

function randomPass() {
	let e = "0123456789QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm-_",
		t = e.length,
		n = document.getElementById("lengthInput");
	finalResult = "";
	for (var l = 0; l < n.value / 3; l++) finalResult += e[Math.floor(Math.random() * t)];
	document.getElementById("output").innerHTML = finalResult;
	let u = document.getElementById("outputMobile");
	u.innerHTML = finalResult, u.innerHTML.length >= 20 && u.innerHTML.length <= 25 ? u.style.fontSize = "25px" : u.innerHTML.length <= 30 && u.innerHTML.length >= 25 ? u.style.fontSize = "20px" : u.innerHTML.length <= 33 && u.innerHTML.length >= 30 && (u.style.fontSize = "15px");
	let o = document.getElementById("overlay");
	o.style.width = "100%", setTimeout(function() {
		o.style.width = "0%"
	}, 2e3)
}

function updateCount() {
	let e = document.getElementById("lengthInput");
	document.getElementById("lengthCount").innerHTML = Math.round(e.value / 3)
}
document.addEventListener("input", function() {
	updateCount()
}), updateCount();
let genbtn = document.getElementById("generate"),
	mBtn = document.getElementById("mGenerate");
genbtn.addEventListener("click", function() {
	randomPass()
}), mBtn.addEventListener("click", function() {
	randomPass()
});


/******************************************************************************************************
                                                Home Website
                                            Made by PineappleRind
                                      https://pineapplerind.github.io
                                                    2021
*******************************************************************************************************/

window.addEventListener("keydown", function(e) {
	e.key === 'r' && window.addEventListener("keydown", function(e) {
		e.key === 'i' && window.addEventListener("keydown", function(e) {
			e.key === 'c' && window.addEventListener("keydown", function(e) {
				e.key === 'k' && (window.location.href = "https://www.youtube.com/watch?v=oHg5SJYRHA0")
			})
		})
	})
});
let author = "PineappleRind. ",
	intro = "Made by ",
	contact = "Email: pineapplerind.info@gmail.com";

function redirect(e) {
	document.body.style.animationName = "load-out", setTimeout(function() {
		window.location.href = e, document.body.style.display = "none"
	}, 1e3)
}
console.log('Made by PineappleRind. Email: pineapplerind.info@gmail.com');
const g = document.getElementById("navButtons"),
	title = document.querySelector(".title");
for (let e = 0, n = g.children.length; e < n; e++) g.children[e].onmouseover = function() {
	title.style.background = "#9a59b9"
}, g.children[e].onmouseleave = function() {
	title.style.background = "#b9598e"
};
onmousemove = (e => {
	let n = e.clientY / 150 - 2,
		t = e.clientX / 75 - 4;
	title.style.transform = "translate(" + t + "px, " + n + "px)"
});
