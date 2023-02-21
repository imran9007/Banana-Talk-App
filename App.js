var btnTranslate = document.querySelector("#btn-Translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");

var serverURL = "	https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
};

function errorHnadler (error) {
    console.log("error occured", error);
    alert ("Something is wrong with server! try again later")
};

function clickHandler(){
    
    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {txtOutput.innerText = json.contents.translated})
    .catch(errorHandler)

};


btnTranslate.addEventListener("click", clickHandler)