// Função que calcula e exibe o valor das apostas e dos retornos
function atualizarCalculo() {
    // Pega os valores das odds e do valor total a ser investido
    let odd1 = parseFloat(document.getElementById('odd1').value);
    let odd2 = parseFloat(document.getElementById('odd2').value);
    let total = parseFloat(document.getElementById('total').value);

    // Se algum dos campos estiver vazio, sai da função
    if (isNaN(odd1) || isNaN(odd2) || isNaN(total)) {
        document.getElementById('resultado').innerHTML = 'Por favor, preencha todas as informações para calcular.';
        return;
    }

    // Calcular probabilidades totais
    let totalProbabilidade = (1 / odd1) + (1 / odd2);

    // Elementos de retorno
    let retorno1Elem = document.getElementById('retorno1');
    let retorno2Elem = document.getElementById('retorno2');
    let resultadoDiv = document.getElementById('resultado');

    // Calcular stakes e lucro se houver surebet
    if (totalProbabilidade < 1) {
        // Calcular valor a ser apostado em cada odd
        let stake1 = (total / (odd1 * totalProbabilidade)).toFixed(2);
        let stake2 = (total / (odd2 * totalProbabilidade)).toFixed(2);

        // Calcular retorno para cada odd
        let retorno1 = (stake1 * odd1).toFixed(2);
        let retorno2 = (stake2 * odd2).toFixed(2);

        // Atualizar os retornos nos spans
        retorno1Elem.innerHTML = `Retorno: R$ ${retorno1}`;
        retorno2Elem.innerHTML = `Retorno: R$ ${retorno2}`;

        // Calcular lucro
        let lucro1 = (retorno1 - total).toFixed(2);
        let lucro2 = (retorno2 - total).toFixed(2);

        // Mostrar resultados
        resultadoDiv.innerHTML = `
            <p>Aposta 1: R$ ${stake1}</p>
            <p>Aposta 2: R$ ${stake2}</p>
            <p>Lucro Garantido (Aposta 1): R$ ${lucro1}</p>
            <p>Lucro Garantido (Aposta 2): R$ ${lucro2}</p>
            <p><b>Oportunidade de Aposta! Lucro garantido em qualquer cenário.</b></p>
        `;
        resultadoDiv.style.background = '#e7ffe6';  // Fundo verde para indicar lucro
    } else {
        // Não há surebet
        retorno1Elem.innerHTML = '';
        retorno2Elem.innerHTML = '';
        resultadoDiv.innerHTML = 'Não há Arbritagem com essas odds.';
        resultadoDiv.style.background = '#ffcccc';  // Fundo vermelho para indicar falta de lucro
    }
}
