const API_URL = 'https://rickandmortyapi.com/api/character';
const cardsContainer = document.getElementById('cards-container');

// Elementos do Modal
const modal = document.getElementById('modal-detalhes');
const btnFechar = document.getElementById('btn-fechar');
const modalImg = document.getElementById('modal-img');
const modalNome = document.getElementById('modal-nome');
const modalStatus = document.getElementById('modal-status');
const modalEspecie = document.getElementById('modal-especie');
const modalGenero = document.getElementById('modal-genero');
const modalOrigem = document.getElementById('modal-origem');

// Função principal de consumo da API
async function buscarPersonagens() {
    try {
        const resposta = await fetch(API_URL);
        if (!resposta.ok) throw new Error('Erro ao comunicar com a API.');

        const dados = await resposta.json();
        cardsContainer.innerHTML = '';

        dados.results.forEach(personagem => {
            criarCardDinamico(personagem);
        });

    } catch (erro) {
        console.error(erro);
        cardsContainer.innerHTML = '<p class="loading" style="color: #ff4757;">Erro ao carregar os dados.</p>';
    }
}

// Criação dinâmica dos cartões com evento de clique
function criarCardDinamico(personagem) {
    const card = document.createElement('div');
    card.classList.add('card');

    const imagem = document.createElement('img');
    imagem.src = personagem.image;
    imagem.alt = personagem.name;

    const cardInfo = document.createElement('div');
    cardInfo.classList.add('card-info');

    const nome = document.createElement('h3');
    nome.textContent = personagem.name;

    const status = document.createElement('p');
    status.textContent = `Status: ${personagem.status}`;

    cardInfo.appendChild(nome);
    cardInfo.appendChild(status);
    card.appendChild(imagem);
    card.appendChild(cardInfo);

    // Evento de clique para abrir o modal com os detalhes do respetivo personagem
    card.addEventListener('click', () => {
        abrirModal(personagem);
    });

    cardsContainer.appendChild(card);
}

// Função para preencher e exibir a janela modal
function abrirModal(personagem) {
    modalImg.src = personagem.image;
    modalNome.textContent = personagem.name;
    modalStatus.textContent = personagem.status;
    modalEspecie.textContent = personagem.species;
    modalGenero.textContent = personagem.gender;
    modalOrigem.textContent = personagem.origin.name;

    modal.classList.add('ativo');
}

// Eventos para fechar o modal
btnFechar.addEventListener('click', () => {
    modal.classList.remove('ativo');
});

// Fecha ao clicar fora da caixa do modal
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('ativo');
    }
});

// Executa a aplicação
buscarPersonagens();