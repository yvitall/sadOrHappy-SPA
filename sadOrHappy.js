const sadOrHappy = document.getElementById("sadOrHappy");

        const words = [
            { text: "Triste", color: "text-blue-400 font-bold text-5xl"},
            {text: "Feliz", color: "text-yellow-300 font-bold text-5xl"}
        ]

        let phraseIndex = 0; // Índice da frase atual
        let charIndex = 0;   // Índice do caractere atual
        let isDeleting = false; // Estado: estamos apagando?
        let typeSpeed = 100; // Velocidade base de digitação

        function typeEffect() {
            const currentObject = words[phraseIndex];
            const currentPhrase = currentObject.text;

            sadOrHappy.className = currentObject.color; 

    if (isDeleting) {
        sadOrHappy.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50;
    } else {
        sadOrHappy.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typeSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % words.length;
        typeSpeed = 500;
    }

    setTimeout(typeEffect, typeSpeed);
}

document.addEventListener('DOMContentLoaded', typeEffect);