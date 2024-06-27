// Solicita ao usuário a nota mínima para aprovação
let notaMinima = parseFloat(prompt("Digite a nota mínima para aprovação:", ""));

let formMedias = document.getElementById('formMedias');

formMedias.addEventListener('submit', function (event) {
    event.preventDefault();

    let atividade = document.getElementById('atividade');
    let nota = document.getElementById('nota');

    let linha = document.createElement('tr');
    linha.classList.add('row-tableContent');

    let colunaAtividade = document.createElement('td');
    colunaAtividade.textContent = atividade.value;
    linha.appendChild(colunaAtividade);

    let colunaNota = document.createElement('td');
    colunaNota.textContent = nota.value;
    linha.appendChild(colunaNota);

    let colunaAprovado = document.createElement('td');
    let img = document.createElement('img');
    img.classList.add('emoji');
    img.src = nota.value >= notaMinima ? './images/aprovado.png' : './images/reprovado.png';
    colunaAprovado.appendChild(img);
    linha.appendChild(colunaAprovado);

    let bodyTable = document.querySelector('tbody');
    bodyTable.appendChild(linha);

    // Calcula a média das notas
    let somaNotas = 0;
    let totalNotas = 0;

    document.querySelectorAll('.row-tableContent').forEach(function (row) {
        let cellNota = row.querySelector('td:nth-child(2)');
        let notaValue = parseFloat(cellNota.textContent);
        somaNotas += notaValue;
        totalNotas++;
    });

    let media = somaNotas / totalNotas;

    // Exibe a média calculada no elemento com id "notaMedia"
    let notaMedia = document.getElementById('notaMedia');
    notaMedia.textContent = media.toFixed(2); // Arredonda a média para 2 casas decimais

    // Atualiza o resultado de aprovação ou reprovação e aplica estilo
    let resultado = document.getElementsByClassName('resultado')[0];
    if (media >= notaMinima) {
        resultado.textContent = 'Aprovado';
        resultado.classList.remove('reprovado');
        resultado.classList.add('aprovado');
    } else {
        resultado.textContent = 'Reprovado';
        resultado.classList.remove('aprovado');
        resultado.classList.add('reprovado');
    }

    // Limpa os campos do formulário
    atividade.value = '';
    nota.value = '';
});
