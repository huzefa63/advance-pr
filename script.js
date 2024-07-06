let textArea = document.querySelector("textarea");
let button = document.querySelector("button");


button.addEventListener("click" , () => {

    let textAreaValue = textArea.value;

    if(textAreaValue.length == 0) {
        alert("please enter some text");
    } 
    else{
        let utterance = new SpeechSynthesisUtterance(textAreaValue);
        speechSynthesis.speak(utterance);
    }

}) 


