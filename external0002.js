var obj ={
doSomething:doSomething,
secondFunction:secondFunction	
}

function doSomething(myelement, color, txtInput) {
		myelement.style.color=color;
		myelement.innerHTML = txtInput
}
function secondFunction(myelement, color, txtInput) {
		alert("SecondMethsd")
}
