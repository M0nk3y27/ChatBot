const talk = document.querySelector('.talk');
const voice2text = document.querySelector('.voice2text');
const voicetext2 = document.querySelector('.voicetext2');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recorder = new SpeechRecognition();

recorder.onstart = () => {
    console.log('voice activate, you can talk');
}

recorder.onresult = (event) => {
    console.log(event);
}

recorder.onstart = () => {
    console.log('Voz activada, puedes hablar');
};

recorder.onresult = (event) => {
    console.log(event);
};

talk.addEventListener('click', () => {
    recorder.start();
});

recorder.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    voice2text.textContent = transcript;
};

function botVoice(message){

    const speech = new SpeechSynthesisUtterance();
    speech.text = "No te entiendo";

    if(message.includes('Hola')){
        speech.text = "Hola... Estoy para ayudarte.";
    }   
    
    if(message.includes('Cómo estás')){
        speech.text = "Estoy bien, gracias por preguntar";
    }

    if(message.includes('hora')){
        let gethours = new Date();
        let minuto = gethours.getMinutes();
        let hora = gethours.getHours();
        speech.text = 'son las: ' + hora + ':' + minuto ;
    }

    if(message.includes('fecha')){
        let getdate = new Date();
        let mes = getdate.getMonth() +1;
        let dia = getdate.getDate();
        let año = getdate.getFullYear();
        speech.text = 'Hoy es : ' + dia + '/' + mes + '/' + año ;
    }

    
    voicetext2.textContent = speech.text; 
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech)

};

recorder.onresult = function(event){
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    voice2text.textContent = transcript;

    botVoice(transcript);
};