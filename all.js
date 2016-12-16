(function(){
	if (document.getElementById('btn1')){
		document.getElementById("btn1").addEventListener("click", displayMessage);
	}
	
	function displayMessage(){
		alert("Hi!");
	}
})()