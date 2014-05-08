console.log("test");
var punctuation = ["\n", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "{", "[", "]", "}", "|", "/"];
var fullText = document.body.innerText;
for (i = 0; i <= fullText.length; i++) {
	fullText.replace(punctuation[i], "");
}
console.log(fullText);