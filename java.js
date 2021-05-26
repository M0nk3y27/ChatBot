const startBtn = document.querySelector('.start-btn');


const recognition = new webkitSpeechRecognition();
recognition.continuos = false;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

const synth = window.speechSynthesis

startBtn.addEventListener('click', () => {
recognition.start();

});

let utter = new SpeechSynthesisUtterance('Hola, Como estas?');
utter.onend = () => {

    recognition.start();
};



recognition.onresult = (e) => {

    const transcript = e.results.length - [1][0].transcript.trim();
        if (transcript === 'Hola'){

            recognition.stop();

           utter.text = 'Hola, Como estas?';
           utter.onend = () => {
            recognition.start();
           };
           synth.speak(utter);
        }
        else if (transcript === 'Adios') {
            recognition.stop();
            utter.text = "Igualmente NOs vemos luego.";
            synth.speak(utter);
        }

};
