// script.js
const ruleta = document.getElementById('ruleta');
const girarBtn = document.getElementById('girarBtn');
const totalSegmentos = 9; // Hay 9 segmentos

girarBtn.addEventListener('click', () => {
    const randomSpin = Math.floor(Math.random() * 360) + 720; // Al menos 2 vueltas completas
    ruleta.style.transform = `rotate(${randomSpin}deg)`;

    setTimeout(() => {
        const finalRotation = (randomSpin % 360) + 20; // Ajuste para centrar segmento
        const selectedSegment = Math.floor(finalRotation / (360 / totalSegmentos)) + 1;
        alert(`¡Segmento seleccionado: ${selectedSegment}!`);
    }, 4000); // Ajustado al tiempo de transición
});
