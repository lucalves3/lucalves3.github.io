// Fazendo a saudação
const pegaLocal = document.querySelector('#saudacao');

function saudacao(time) {
    setTimeout(() => {
    pegaLocal.innerHTML = "Olá!"
}, time);
setTimeout(() => {
    pegaLocal.innerHTML = "Me chamo Lucas"
}, time*4);
setTimeout(() => {
    pegaLocal.innerHTML = "Sou Desenvolvedor Front-End"
}, time*8);
setTimeout(() => {
    pegaLocal.innerHTML = "Esse site está sendo refeito"
}, time*12);
setTimeout(() => {
    pegaLocal.innerHTML = "Esse site está sendo refeito"
}, time*16);
setTimeout(() => {
    pegaLocal.innerHTML = "Em React"
}, time*20);
}




window.onload = () => {
saudacao(1000)
}