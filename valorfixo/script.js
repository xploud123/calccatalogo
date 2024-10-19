// Função que calcula e exibe o valor das apostas e dos retornos
function atualizarCalculo() {
    // Pega os valores das odds e o valor fixo da odd 1
    let odd1 = parseFloat(document.getElementById('odd1').value);
    let odd2 = parseFloat(document.getElementById('odd2').value);
    let valorFixo = parseFloat(document.getElementById('valorFixo').value);

    // Se algum dos campos estiver vazio, sai da função
    if (isNaN(odd1) || isNaN(odd2) || isNaN(valorFixo)) {
        document.getElementById('resultado').innerHTML = 'Por favor, preencha todas as informações para calcular.';
        return;
    }

    // Calcular a probabilidade total
    let totalProbabilidade = (1 / odd1) + (1 / odd2);

    // Verificar se há surebet
    if (totalProbabilidade < 1) {
        // Calcular a aposta na odd 2 baseada no valor fixo da odd 1
        let stake2 = (valorFixo * odd1 / odd2).toFixed(2);

        // Calcular os retornos para ambas as odds
        let retorno1 = (valorFixo * odd1).toFixed(2);
        let retorno2 = (stake2 * odd2).toFixed(2);

        // Calcular o lucro
        let lucro = (Math.min(retorno1, retorno2) - (parseFloat(valorFixo) + parseFloat(stake2))).toFixed(2);

        // Exibir os resultados
        document.getElementById('resultado').innerHTML = `
            <p>Aposta 1: R$ ${valorFixo}</p>
            <p>Aposta 2: R$ ${stake2}</p>
            <p>Retorno 1: R$ ${retorno1}</p>
            <p>Retorno 2: R$ ${retorno2}</p>
            <p><b>Lucro Garantido: R$ ${lucro}</b></p>
        `;
        document.getElementById('resultado').style.background = '#e7ffe6';  // Fundo verde para indicar lucro
    } else {
        // Não há surebet
        document.getElementById('resultado').innerHTML = 'Não há surebet com essas odds.';
        document.getElementById('resultado').style.background = '#ffcccc';  // Fundo vermelho para indicar falta de lucro
    }
}
