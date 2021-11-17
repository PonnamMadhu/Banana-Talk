var btnTRanslate=document.querySelector("#btn-translate");
var textInput=document.querySelector("#txt-input");
var output=document.querySelector("#output");
var serverUrl="https://api.funtranslations.com/translate/minion.json"
function getTranslation(text){
    return serverUrl+ "?" + "text=" + text
}
function errorHandler(error){
    console.log("Error occured",error)
    alert("something wrong with server!Try again after sometime")
}
function clickHandler(){
   var inputtext=textInput.value;
   fetch(getTranslation(inputtext))
   .then(response => response.json())
   .then(json => {
      var translatedtext=json.contents.translated;
      output.innerHTML=translatedtext;
   })
    .catch(errorHandler)
    }
btnTRanslate.addEventListener("click",clickHandler)
