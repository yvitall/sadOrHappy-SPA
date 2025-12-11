const frasesSad = [
    "Vai dar tudo certo!",
    "Vai ficar tudo bem!",
    "Acredite!", 
    "Papai do céu já disse que vai dar tudo certo, lembra?",
    "Estou com você!",
]

const frasesHappy = [
    "Você merece!",
    "Sinta e aproveite!",
    "Estou orgulhoso de você, viu?!",
    "Parabéns meu amor, você merece!"
]

function fraseHappy(){
    const indexfrase = Math.floor(Math.random() * frasesHappy.length);
    document.getElementById("frase").innerHTML = frasesHappy[indexfrase];
}
function fraseSad(){
    const indexfrase = Math.floor(Math.random() * frasesSad.length);
    document.getElementById("frase").innerHTML = frasesSad[indexfrase];
}