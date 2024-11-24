/*
OBJETIVO - Quando clicamos no botão temos que mostrar a imagem de fundo correspondente

- Passo 1 - Dar um jeitto de pegar o elemento HTML dos botoes
- Passo 2 - Dar um jeito de identificar o clique do usuario no botao
- Passo 3 - Desmarcar o botao selecionado anterior
- Passo 4 - Marcar o botao clicando como se estivesse selecionada
- Passo 5 - Esconder a imagem anterior
- Passo 6 -Fazer aparecer a imagem correspondente ao botao clicando
*/

//- Passo 1 - Dar um jeitto de pegar o elemento HTML dos botoes 
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

//- Passo 2 - Dar um jeito de identificar o clique do usuario no botao
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

      console.log(indice);
  // - Passo 3 - Desmarcar o botao selecionado anterior
  const botaoSelecionado = document.querySelector('.selecionado');
  console.log(botaoSelecionado.classList.remove('selecionado'));

 // - Passo 4 - Marcar o botao clicando como se estivesse selecionada
 botao.classList.add('selecionado');

 // - Passo 5 - Esconder a imagem anterior
 const imagemAtiva = document.querySelector('.ativa');
 imagemAtiva.classList.remove('ativa');

 //- Passo 6 -Fazer aparecer a imagem correspondente ao botao clicando
 imagens[indice].classList.add('ativa');

    })
})