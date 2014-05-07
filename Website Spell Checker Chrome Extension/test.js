//Website spell checker chrome extension
//let's do this
var position = true;
var fullArray = [];
var htmlText = getText();

/*function grabUrl(){
	var url = prompt("Enter the URL here.", "Ex. http://www.psd401.net/");
	return url;
}*/

function getText(){
    var xmlHttp = null;
	var url = prompt("Enter the URL here.", "Ex. http://www.psd401.net/");
	if (url != null) {
		xmlHttp = new XMLHttpRequest();
		xmlHttp.open( "GET", url, false );
		//xmlHttp.send( null );
		return xmlHttp.responseText;
	} else {
		prompt("You need to enter a valid URL. Ensure that there aren't any spaces.");
		return "You didn't enter a valid URL.";
	}
}


alert(htmlText);
/*for (i = 0; position; i++) {
	
}*/ 

