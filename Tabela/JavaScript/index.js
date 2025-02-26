// Selecionando os elementos necessários
const form = document.getElementById("form");
const tabela = document.getElementById("tabela").getElementsByTagName("tbody")[0];
const nomeInput = document.getElementById("nome");
const casaInput = document.getElementById("casa");
const feitiçoInput = document.getElementById("feitiço");

// Função para adicionar os dados à tabela
form.addEventListener("submit", function (e) {
    e.preventDefault(); // Impede o envio do formulário, evitando recarregamento da página

    // Pegando os valores dos campos do formulário
    const nome = nomeInput.value.trim();
    const casa = casaInput.value.trim();
    const feitiço = feitiçoInput.value.trim();

    // Verificando se todos os campos estão preenchidos
    if (nome && casa && feitiço) {
        // Criando uma nova linha na tabela
        const novaLinha = tabela.insertRow();

        // Criando células para cada coluna
        const nomeCelula = novaLinha.insertCell(0);
        const casaCelula = novaLinha.insertCell(1);
        const feitiçoCelula = novaLinha.insertCell(2);

        // Inserindo os dados nas células
        nomeCelula.textContent = nome;
        casaCelula.textContent = casa;
        feitiçoCelula.textContent = feitiço;

        // Limpando os campos após o envio
        nomeInput.value = "";
        casaInput.value = "";
        feitiçoInput.value = "";
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});
