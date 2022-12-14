// Minified from https://www.w3schools.com/howto/howto_custom_select.asp

var x, i, j, l, ll, selElmnt, a, b, c;
for (l = (x = document.getElementsByClassName("custom-select")).length, i = 0; i < l; i++) {
	for (ll = (selElmnt = x[i].getElementsByTagName("select")[0]).length, (a = document.createElement("DIV")).setAttribute("class", "select-selected"), a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML, x[i].appendChild(a), (b = document.createElement("DIV")).setAttribute("class", "select-items select-hide"), j = 1; j < ll; j++)(c = document.createElement("DIV")).innerHTML = selElmnt.options[j].innerHTML, c.addEventListener("click", function(e) {
		var t, s, l, n, i, c, a;
		for (c = (n = this.parentNode.parentNode.getElementsByTagName("select")[0]).length, i = this.parentNode.previousSibling, s = 0; s < c; s++)
			if (n.options[s].innerHTML == this.innerHTML) {
				for (n.selectedIndex = s, i.innerHTML = this.innerHTML, a = (t = this.parentNode.getElementsByClassName("same-as-selected")).length, l = 0; l < a; l++) t[l].removeAttribute("class");
				this.setAttribute("class", "same-as-selected");
				break
			} i.click()
	}), b.appendChild(c);
	x[i].appendChild(b), a.addEventListener("click", function(e) {
		e.stopPropagation(), closeAllSelect(this), this.nextSibling.classList.toggle("select-hide"), this.classList.toggle("select-arrow-active")
	})
}

function closeAllSelect(e) {
	var t, s, l, n, i, c = [];
	for (t = document.getElementsByClassName("select-items"), s = document.getElementsByClassName("select-selected"), n = t.length, i = s.length, l = 0; l < i; l++) e == s[l] ? c.push(l) : s[l].classList.remove("select-arrow-active");
	for (l = 0; l < n; l++) c.indexOf(l) && t[l].classList.add("select-hide")
}
document.addEventListener("click", closeAllSelect);