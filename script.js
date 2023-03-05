function validateForm() {
	var username = document.forms["signupForm"]["username"].value;
	var password = document.forms["signupForm"]["password"].value;

	if (username == "" || password == "") {
		alert("Please fill all the fields.");
		return false;
	}

	if (password.length < 6) {
		alert("Password must be at least 6 characters long.");
		return false;
	}

	return true;
}
