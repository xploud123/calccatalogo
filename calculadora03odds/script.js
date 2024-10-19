// Função que calcula e exibe o valor das apostas e dos retornos
function atualizarCalculo() {
    // Pega os valores das odds e do valor total a ser investido
    let odd1 = parseFloat(document.getElementById('odd1').value);
    let odd2 = parseFloat(document.getElementById('odd2').value);
    let odd3 = parseFloat(document.getElementById('odd3').value); // Nova Odd 3
    let total = parseFloat(document.getElementById('total').value);

    // Verifica se Odd 2 está vazia
    let usarOdd2 = !isNaN(odd2);  // Verifica se a Odd 2 está preenchida e é um número

    // Se alguma das odds necessárias ou o valor total não forem preenchidos, sai da função
    if (isNaN(odd1) || (!usarOdd2 && isNaN(odd3)) || isNaN(total)) {
        document.getElementById('resultado').innerHTML = 'Por favor, preencha todas as informações para calcular.';
        return;
    }

    // Calcular probabilidades totais, considerando se odd2 está presente
    let totalProbabilidade = (1 / odd1);
    if (usarOdd2) {
        totalProbabilidade += (1 / odd2);
    }
    if (!isNaN(odd3)) {
        totalProbabilidade += (1 / odd3);
    }

    // Elementos de retorno
    let retorno1Elem = document.getElementById('retorno1');
    let retorno2Elem = document.getElementById('retorno2');
    let retorno3Elem = document.getElementById('retorno3');
    let resultadoDiv = document.getElementById('resultado');

    // Calcular stakes e lucro se houver surebet
    if (totalProbabilidade < 1) {
        // Calcular valor a ser apostado em cada odd
        let stake1 = (total / (odd1 * totalProbabilidade)).toFixed(2);
        let stake2 = usarOdd2 ? (total / (odd2 * totalProbabilidade)).toFixed(2) : 0;
        let stake3 = !isNaN(odd3) ? (total / (odd3 * totalProbabilidade)).toFixed(2) : 0;

        // Calcular retorno para cada odd
        let retorno1 = (stake1 * odd1).toFixed(2);
        let retorno2 = usarOdd2 ? (stake2 * odd2).toFixed(2) : 0;
        let retorno3 = !isNaN(odd3) ? (stake3 * odd3).toFixed(2) : 0;

        // Atualizar os retornos nos spans
        retorno1Elem.innerHTML = `Retorno: R$ ${retorno1}`;
        if (usarOdd2) {
            retorno2Elem.innerHTML = `Retorno: R$ ${retorno2}`;
        } else {
            retorno2Elem.innerHTML = '';
        }
        if (!isNaN(odd3)) {
            retorno3Elem.innerHTML = `Retorno: R$ ${retorno3}`;
        }

        // Calcular lucro
        let lucro1 = (retorno1 - total).toFixed(2);
        let lucro2 = usarOdd2 ? (retorno2 - total).toFixed(2) : 0;
        let lucro3 = !isNaN(odd3) ? (retorno3 - total).toFixed(2) : 0;

        // Mostrar resultados
        resultadoDiv.innerHTML = `
            <p>Aposta 1: R$ ${stake1}</p>
            ${usarOdd2 ? `<p>Aposta 2: R$ ${stake2}</p>` : ''}
            ${!isNaN(odd3) ? `<p>Aposta 3: R$ ${stake3}</p>` : ''}
            <p>Lucro Garantido (Aposta 1): R$ ${lucro1}</p>
            ${usarOdd2 ? `<p>Lucro Garantido (Aposta 2): R$ ${lucro2}</p>` : ''}
            ${!isNaN(odd3) ? `<p>Lucro Garantido (Aposta 3): R$ ${lucro3}</p>` : ''}
            <p><b>Oportunidade de Aposta! Lucro garantido em qualquer cenário.</b></p>
        `;
        resultadoDiv.style.background = '#e7ffe6';  // Fundo verde para indicar lucro
    } else {
        // Não há Aposta
        retorno1Elem.innerHTML = '';
        retorno2Elem.innerHTML = '';
        if (!isNaN(odd3)) {
            retorno3Elem.innerHTML = '';
        }
        resultadoDiv.innerHTML = 'Não há Arbitragem com essas odds.';
        resultadoDiv.style.background = '#ffcccc';  // Fundo vermelho para indicar falta de lucro
    }
}
