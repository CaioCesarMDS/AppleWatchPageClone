const imagemVisualizacao = document.getElementById("imagem-visualizacao");
const tituloProduto = document.getElementById("titulo-produto");
const nomeCorSelecionada = document.getElementById("nome-cor-selecionada");
const imagemMiniatura0 = document.getElementById("0-imagem-miniatura")
const imagemMiniatura1 = document.getElementById("1-imagem-miniatura")
const imagemMiniatura2 = document.getElementById("2-imagem-miniatura")

const verdeCipreste = {
    nome: "verde-cipreste",
    pasta: "imagens-verde-cipreste",
};

const azulInverno = {
    nome: "azul-inverno",
    pasta: "imagens-azul-inverno",
};

const meiaNoite = {
    nome: "meia-noite",
    pasta: "imagens-meia-noite",
};

const estelar = {
    nome: "estelar",
    pasta: "imagens-estelar",
};

const rosaClaro = {
    nome: "rosa-claro",
    pasta: "imagens-rosa-claro",
};

const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];
const opcoesTamanho = ["41", "45"];

let imagemSelecionada = 1;
let tamanhoSelecionado = 1;
let corSelecionada = 1;

function trocarImagem() {
    const idOpcaoSelecionada = document.querySelector(`[name="opcao-imagem"]:checked`).id;
    imagemSelecionada = idOpcaoSelecionada.charAt(0);
    imagemVisualizacao.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-${imagemSelecionada}.jpeg`;
}

function trocarTamanho() {
    const idOpcaoSelecionada = document.querySelector(
        `[name="opcao-tamanho"]:checked`
    ).id;
    tamanhoSelecionado = idOpcaoSelecionada.charAt(0);
    tituloProduto.textContent = `Pulseira loop esportiva ${opcoesCores[corSelecionada].nome} para caixa de ${opcoesTamanho[tamanhoSelecionado]} mm`;
    imagemVisualizacao.classList.toggle("caixa-pequena");
}

function trocarCor() {
    const idCorSelecionada = document.querySelector(`[name="opcao-cor"]:checked`).id;
    corSelecionada = idCorSelecionada.charAt(0);
    tituloProduto.textContent = `Pulseira loop esportiva ${opcoesCores[corSelecionada].nome} para caixa de ${opcoesTamanho[tamanhoSelecionado]} mm`;
    console.log(corSelecionada);
    nomeCorSelecionada.textContent = `Cor - ${opcoesCores[corSelecionada].nome}`;
    imagemVisualizacao.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-${imagemSelecionada}.jpeg`;
    imagemMiniatura0.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-0.jpeg`;
    imagemMiniatura1.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-1.jpeg`;
    imagemMiniatura2.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-2.jpeg`;
}
