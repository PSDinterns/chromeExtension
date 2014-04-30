//Website spell checker v0.0.1 chrome extension
//let's do this
var position = document.documentElement.innerHTML.indexOf("and");

function getText(){
    return document.body.innerText
}

function makeMistakeArray(){
	var fso = new ActiveXObject("Scripting.FileSystemObject");
	var mistakes = fso.OpenTextFile("C:\Users\Administrator\Desktop\extensionizr_custom1398805745887\ext\mistakes.txt");
	var mistakesList = mistakes.Read(1000);
	var mistakesArray = mistakesList.split("->");
	for (i = 0; i != null; i++) {
		var mistakesString = mistakesArray[i].toString();
	}
}

/*for (i = 0; position; i++) {
	if (somethingArray[i] === "and") {
		
	}
}*/


/*
 
while (position) {
	if it contains something, then do this
	
}