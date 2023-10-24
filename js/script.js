const botao = document.getElementById("btn"); // Importa o Botão

document.addEventListener("DOMContentLoaded", (event) => {
    botao.addEventListener("click", Calcular); // Adiciona Evento ao Botão

    function Calcular() {
        const numeroDigitado = Number(document.getElementById("number").value); // Captura o Número Digitado
        let numeroSorteado = parseInt((Math.random() * 100) + 1); // Sorteia número aleatório

        if (numeroDigitado === numeroSorteado) {
            alert("Parabéns, você ganhou.\n\nO Seu número foi: " + numeroDigitado + "\nE o Numero Sorteado foi: " + numeroSorteado); // Printa o Resultado no Alert
        } else {
            alert("Mais Sorte na Próxima.\n\nO Seu número foi: " + numeroDigitado + "\nE o número sorteado foi: " + numeroSorteado); // Printa o Resultado no Alert
        }
    }
});
