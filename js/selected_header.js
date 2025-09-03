function header_selected(x) {
	
	if (x == "1") {
		
		document.getElementById("header_selected1").style.background = "linear-gradient(to bottom right, #1f3b57, #3498db)";
		document.getElementById("header_selected2").style.background = "linear-gradient(to bottom right, #5c7d99, #85c1f0)";
		document.getElementById("container1").style.display = "block";
		document.getElementById("container2").style.display = "none";
		
	} else if (x == "2") {
		
		document.getElementById("header_selected2").style.background = "linear-gradient(to bottom right, #1f3b57, #3498db)";
		document.getElementById("header_selected1").style.background = "linear-gradient(to bottom right, #5c7d99, #85c1f0)";
		document.getElementById("container2").style.display = "block";
		document.getElementById("container1").style.display = "none";
		
	}
	
}