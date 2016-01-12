(function() {
	"use strict";

	var request = new XMLHttpRequest();
	var url = 'http://localhost:3000/api/index';
	request.open('POST', url, true);

	request.onreadystatechange = function() {
		if (request.readyState === 4) {
			if (request.status === 200) {
				var response = request.responseText;
				document.getElementById('response').textContent = response;
			} else {
				var errorMessage = 'Request Failed';
				document.getElementById('response').textContent = errorMessage;
			}
		}
	};

	var postData = "url=http://www.matscube.com/";
	request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	request.send(postData);
})();
