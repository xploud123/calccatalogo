// Função que calcula e exibe o valor das apostas e dos retornos
function atualizarCalculo() {
    let odd1 = parseFloat(document.getElementById('odd1').value);
    let odd2 = parseFloat(document.getElementById('odd2').value);
    let odd3 = parseFloat(document.getElementById('odd3').value);
    let total = parseFloat(document.getElementById('total').value);

    if (isNaN(odd1) || isNaN(odd2) || isNaN(odd3) || isNaN(total)) {
        document.getElementById('resultado').innerHTML = 'Por favor, preencha todas as informações para calcular.';
        return;
    }

    let totalProbabilidade = (1 / odd1) + (1 / odd2) + (1 / odd3);
    let stake1 = (total / (odd1 * totalProbabilidade)).toFixed(2);
    let stake2 = (total / (odd2 * totalProbabilidade)).toFixed(2);
    let stake3 = (total / (odd3 * totalProbabilidade)).toFixed(2);

    let retorno1 = (stake1 * odd1).toFixed(2);
    let retorno2 = (stake2 * odd2).toFixed(2);
    let retorno3 = (stake3 * odd3).toFixed(2);

    let prejuizo1 = (retorno1 - total).toFixed(2);
    let prejuizo2 = (retorno2 - total).toFixed(2);
    let prejuizo3 = (retorno3 - total).toFixed(2);

    let prejuizoMaximo = Math.min(prejuizo1, prejuizo2, prejuizo3).toFixed(2);

    // Calcula lucro se ganhar em duas odds e faz a média
    let lucroDuasOdds1e2 = parseFloat(retorno1) + parseFloat(retorno2) - total - Math.abs(prejuizoMaximo);
    let lucroDuasOdds1e3 = parseFloat(retorno1) + parseFloat(retorno3) - total - Math.abs(prejuizoMaximo);
    let lucroDuasOdds2e3 = parseFloat(retorno2) + parseFloat(retorno3) - total - Math.abs(prejuizoMaximo);

    let mediaLucroDuplo = ((lucroDuasOdds1e2 + lucroDuasOdds1e3 + lucroDuasOdds2e3) / 3).toFixed(2);

    document.getElementById('resultado').innerHTML = `
        <p>Aposta 1: R$ ${stake1}</p>
        <p>Aposta 2: R$ ${stake2}</p>
        <p>Aposta 3: R$ ${stake3}</p>

        <p>Retorno Odd 1: R$ ${retorno1}</p>
        <p>Retorno Odd 2: R$ ${retorno2}</p>
        <p>Retorno Odd 3: R$ ${retorno3}</p>

        <p style="color: red;">
            Prejuízo (Aposta 1): R$ ${prejuizo1}<br>
            Prejuízo (Aposta 2): R$ ${prejuizo2}<br>
            Prejuízo (Aposta 3): R$ ${prejuizo3}<br>
            Prejuízo máximo: R$ ${prejuizoMaximo}
        </p>

        <p style="color: green;">
            <b>Lucro Garantido se acontecer o DUPLO: R$ ${mediaLucroDuplo}</b>
        </p>
    `;
}
