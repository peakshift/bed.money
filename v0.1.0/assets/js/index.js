function toggleTable(el, tableId) {
	document.getElementById(tableId).classList.toggle("collapsed");
}

let activeEdit = false;

function confirmExit() {
	return "You have attempted to leave this page. Are you sure?";
}

function copy() {
	var copyText = document.body.outerHTML;
	var textArea = document.createElement("textarea");
	textArea.value = copyText;
	document.body.appendChild(textArea);
	textArea.select();
	document.execCommand("copy");
	textArea.remove();
}

document.onkeyup = function (e) {
	// ctrl + e
	if (e.ctrlKey && e.which == 69) {
		activeEdit = true;
		document
			.getElementsByTagName("html")[0]
			.setAttribute("contenteditable", "true");
		window.onbeforeunload = confirmExit;

		document.body.select();
		document.execCommand("copy");

		alert("Editor active");
	}
	// ctrl + u
	else if (e.ctrlKey && e.which == 85) {
		copy();
		alert("Copied");
	}
};
