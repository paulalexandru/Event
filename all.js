(function(){		
	if (document.getElementById('myParent')){		
		
		document.getElementById("myParent").addEventListener("click",function(e) {						
			if (e.target && e.target.matches("button#btn1")) {
				displayMessage();
			}
		});		
	}
	
	function displayMessage(){
		alert("Hi!");
	}
})()