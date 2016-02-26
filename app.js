console.log("Javascript is alive!");

// window.onload = function() {

//1

	var greeting = document.getElementById('greeting');
	greeting.innerText = "Hello, World!";

//2

	var li = document.querySelectorAll('li');
	for (var i = 0; i < li.length; i++) {
		// console.log(li);
		li[i].style.backgroundColor = 'yellow';
	}

//3

	var img = document.createElement('img');
	img.src  = 'http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif';
	img.setAttribute('height', '100px');
	img.setAttribute('width', '100px');
	greeting.appendChild(img);


//4
	
	var allSelected = document.querySelectorAll('li');

	function select(event) {
		for (var i = 0; i < allSelected.length; i++) {allSelected[i].className = '';} 
		event.target.className = 'selected';
	}

	for (var i = 0; i < li.length; i++) {
		li[i].addEventListener('click', select);
	}

//5

	
	var img1 = document.getElementsByTagName("img")[1];

	for (var i = 0; i < li.length; i++) {
		li[i].addEventListener('click', change_image);
	}

	function change_image(event) {
		var address = "images/" + event.target.innerText + ".jpeg";
		img1.src = address;
	}

//6

	var ghost = document.getElementById("ghosting");

	function ghosting(event) {
		// debugger
		ghost.style.display = "none";
	}

	ghost.addEventListener('mouseover', ghosting);


//7

	var resize = document.getElementById("resize");

	function sizeup(event) {
		// debugger
		resize.style.width = "400px";
	}

	resize.addEventListener('mouseover', sizeup);

	function sizedown(event) {
		resize.style.width = "200px";
	}

	resize.addEventListener('mouseleave', sizedown);


	//8

	var button = document.getElementById('reset');

	button.addEventListener('click', panic);

	function panic (event) {

		for (var i = 0; i < li.length; i++) {li[i].className = '';} 

		img1.src = "images/" + "panic" + ".jpeg";
	}


	//9



	window.addEventListener('keypress', hater);

	function hater (event) {
		// debugger
		var keyCode = event.keyCode;

		switch (keyCode) {
			case 48:
			case 49:
			case 50:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
			case 58:
				window.alert("I HATE NUMBERZZZ!");
				break;
		}
	}


	//Bonus

//40,40,37,39,37,39,66,65
	arr = [38,38];

	window.addEventListener('keypress', guru);

	function guru (event) {
		// debugger
		var keyCode = event.keyCode;

		switch (keyCode) {
			case arr:
				window.alert("You are a guru!");
				break;
		}
	}











// };

