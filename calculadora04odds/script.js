// Função que calcula e exibe o valor das apostas e dos retornos
function atualizarCalculo() {
    // Pega os valores das odds e do valor total a ser investido
    let odd1 = parseFloat(document.getElementById('odd1').value);
    let odd2 = parseFloat(document.getElementById('odd2').value);
    let odd3 = parseFloat(document.getElementById('odd3').value);
    let odd4 = parseFloat(document.getElementById('odd4').value); // Nova Odd 4
    let total = parseFloat(document.getElementById('total').value);

    // Verifica se Odd 2 está vazia
    let usarOdd2 = !isNaN(odd2);
    let usarOdd3 = !isNaN(odd3);
    let usarOdd4 = !isNaN(odd4); // Verifica se a Odd 4 está preenchida

    // Se alguma das odds necessárias ou o valor total não forem preenchidos, sai da função
    if (isNaN(odd1) || (!usarOdd2 && !usarOdd3 && !usarOdd4) || isNaN(total)) {
        document.getElementById('resultado').innerHTML = 'Por favor, preencha todas as informações para calcular.';
        return;
    }

    // Calcular probabilidades totais
    let totalProbabilidade = (1 / odd1);
    if (usarOdd2) totalProbabilidade += (1 / odd2);
    if (usarOdd3) totalProbabilidade += (1 / odd3);
    if (usarOdd4) totalProbabilidade += (1 / odd4);

    // Elementos de retorno
    let retorno1Elem = document.getElementById('retorno1');
    let retorno2Elem = document.getElementById('retorno2');
    let retorno3Elem = document.getElementById('retorno3');
    let retorno4Elem = document.getElementById('retorno4'); // Novo elemento para Odd 4
    let resultadoDiv = document.getElementById('resultado');

    // Calcular stakes e lucro se houver surebet
    if (totalProbabilidade < 1) {
        // Calcular valor a ser apostado em cada odd
        let stake1 = (total / (odd1 * totalProbabilidade)).toFixed(2);
        let stake2 = usarOdd2 ? (total / (odd2 * totalProbabilidade)).toFixed(2) : 0;
        let stake3 = usarOdd3 ? (total / (odd3 * totalProbabilidade)).toFixed(2) : 0;
        let stake4 = usarOdd4 ? (total / (odd4 * totalProbabilidade)).toFixed(2) : 0; // Calcular para Odd 4

        // Calcular retorno para cada odd
        let retorno1 = (stake1 * odd1).toFixed(2);
        let retorno2 = usarOdd2 ? (stake2 * odd2).toFixed(2) : 0;
        let retorno3 = usarOdd3 ? (stake3 * odd3).toFixed(2) : 0;
        let retorno4 = usarOdd4 ? (stake4 * odd4).toFixed(2) : 0; // Calcular retorno para Odd 4

        // Atualizar os retornos nos spans
        retorno1Elem.innerHTML = `Retorno: R$ ${retorno1}`;
        if (usarOdd2) retorno2Elem.innerHTML = `Retorno: R$ ${retorno2}`;
        if (usarOdd3) retorno3Elem.innerHTML = `Retorno: R$ ${retorno3}`;
        if (usarOdd4) retorno4Elem.innerHTML = `Retorno: R$ ${retorno4}`; // Atualizar para Odd 4

        // Calcular lucro
        let lucro1 = (retorno1 - total).toFixed(2);
        let lucro2 = usarOdd2 ? (retorno2 - total).toFixed(2) : 0;
        let lucro3 = usarOdd3 ? (retorno3 - total).toFixed(2) : 0;
        let lucro4 = usarOdd4 ? (retorno4 - total).toFixed(2) : 0; // Calcular lucro para Odd 4

        // Mostrar resultados
        resultadoDiv.innerHTML = `
            <p>Aposta 1: R$ ${stake1}</p>
            ${usarOdd2 ? `<p>Aposta 2: R$ ${stake2}</p>` : ''}
            ${usarOdd3 ? `<p>Aposta 3: R$ ${stake3}</p>` : ''}
            ${usarOdd4 ? `<p>Aposta 4: R$ ${stake4}</p>` : ''}
            <p>Lucro Garantido (Aposta 1): R$ ${lucro1}</p>
            ${usarOdd2 ? `<p>Lucro Garantido (Aposta 2): R$ ${lucro2}</p>` : ''}
            ${usarOdd3 ? `<p>Lucro Garantido (Aposta 3): R$ ${lucro3}</p>` : ''}
            ${usarOdd4 ? `<p>Lucro Garantido (Aposta 4): R$ ${lucro4}</p>` : ''}
            <p><b>Oportunidade de Surebet! Lucro garantido em qualquer cenário.</b></p>
        `;
        resultadoDiv.style.background = '#e7ffe6';  // Fundo verde para indicar lucro
    } else {
        // Não há surebet
        retorno1Elem.innerHTML = '';
        retorno2Elem.innerHTML = '';
        retorno3Elem.innerHTML = '';
        retorno4Elem.innerHTML = ''; // Limpar retorno da Odd 4
        resultadoDiv.innerHTML = 'Não há surebet com essas odds.';
        resultadoDiv.style.background = '#ffcccc';  // Fundo vermelho para indicar falta de lucro
    }
}
