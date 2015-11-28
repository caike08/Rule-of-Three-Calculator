/* JAVASCRIPT */

var Index = {

	/* Inicialize */
	init: function() {
		console.log("Starting... setting button listener");
		Index.setButtonClick();
	},

	/* Setting listener */
	setButtonClick: function() {
		document.getElementById("btn-calc").addEventListener("click", Index.executeCalc);
		console.log("Listener has been set!");
	},

	executeCalc: function() {
		console.log("Calculating :)");

		var x1 = (document.getElementById("x1").value);
		var y1 = (document.getElementById("y1").value);
		var x2 = (document.getElementById("x2").value);

		var result = (y1 * x2 / x1);


		document.getElementById("result").value = result;

	}
}

Index.init();