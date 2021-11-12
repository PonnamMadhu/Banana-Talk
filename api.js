var btnTRanslate=document.querySelector("#btn-translate");
var textInput=document.querySelector("#txt-input");
var output=document.querySelector("#output");
function clickHandler(){
    output.innerText="hdbasfggf "+textInput.value
    
}
btnTRanslate.addEventListener("click",clickHandler)
