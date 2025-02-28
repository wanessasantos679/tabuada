// Função para gerar e exibir a tabuada do 1 ao 10
function gerarTabuada() {
    const tabuadaDiv = document.getElementById('tabuada');
    let tabuadaHTML = '';

    // Loop para gerar a tabuada de 1 a 10
    for (let i = 1; i <= 10; i++) {
        tabuadaHTML += `<h3>Tabuada do ${i}:</h3>`;
        for (let j = 1; j <= 10; j++) {
            tabuadaHTML += `${i} x ${j} = ${i * j}<br>`;
        }
        tabuadaHTML += '<br>';
    }

    // Inserir a tabuada gerada no HTML
    tabuadaDiv.innerHTML = tabuadaHTML;
}

// Chama a função para gerar a tabuada ao carregar a página
gerarTabuada();
