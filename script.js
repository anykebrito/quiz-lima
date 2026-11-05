const perguntas = [
    {
        pergunta: "Qual a cor favorita dela? (preste bastante atenção aos detalhes!!)",
        alternativas: ["Roxo", "Vermelho", "Rosa", "Azul marinho"],
        respostaCorreta: 3
    },
    {
        pergunta: "Qual a comida favorita dela?",
        alternativas: ["Massa", "Hambúrguer", "Sushi", "Churrasco"],
        respostaCorreta: 2
    },
    {
        pergunta: "Qual a sobremesa favorita dela?",
        alternativas: ["Brigadeiro", "Sorvete", "Brownie", "Cookie"],
        respostaCorreta: 1
    },
    {
        pergunta: "Qual uma coisa que ela definitivamente não gosta?",
        alternativas: ["Falta de noção", "Falsidade", "Falar alto", "Mentir"],
        respostaCorreta: 0
    },
    {
        pergunta: "Quando está muito irritada (nunca) o que ela costuma fazer?",
        alternativas: ["Gritar", "Chorar", "Ficar em silêncio", "Sair correndo"],
        respostaCorreta: 1
    },
    {
        pergunta: "O que mais deixa ela feliz?",
        alternativas: ["Receber elogios", "Comer doces", "Ver filmes", "Ir pra academia"],
        respostaCorreta: 1
    },
    {
        pergunta: "Como ela costuma te chamar?",
        alternativas: ["Xuxu", "Baby", "Amorzinho", "Momo"],
        respostaCorreta: 3
    },
    {
        pergunta: "Se ela pudesse escolher um lugar para morar, qual seria?",
        alternativas: ["São Paulo", "Canadá", "Rio de Janeiro", "Madri"],
        respostaCorreta: 1
    },
    {
        pergunta: "Qual o maior sonho dela?",
        alternativas: ["Viajar o mundo", "Ter uma família", "Ser famosa", "Ter um carro de luxo"],
        respostaCorreta: 0
    },
    {
        pergunta: "O que ela mais gostaria de receber de presente?",
        alternativas: ["Flores", "Um beijinho", "Joias", "Roupas"],
        respostaCorreta: 1
    },
    {
        pergunta: "Qual o maior medo dela?",
        alternativas: ["Altura", "Escuro", "Insetos", "Ser um fracasso"],
        respostaCorreta: 3
    },
    {
        pergunta: "Qual o maior defeito dela?",
        alternativas: ["Desorganizada", "Teimosa", "Preguiçosa", "Impulsiva"],
        respostaCorreta: 3
    }
];

let perguntaAtual = 0;
let pontuacao = 0;

const pergunta = document.getElementById("pergunta");
const imagem = document.getElementById("imagem");
const alternativas = document.getElementById("alternativas");
const resultado = document.getElementById("resultado");
const proxima = document.getElementById("proxima");


function mostrarPergunta() {

    pergunta.textContent = perguntas[perguntaAtual].pergunta;
    imagem.style.display = "none";
    alternativas.innerHTML = "";
    resultado.textContent = "";

    const opcoes = perguntas[perguntaAtual].alternativas;

    opcoes.forEach(function (alternativa, indice) {

        const botao = document.createElement("button");

        botao.textContent = alternativa;

        botao.addEventListener("click", function () {

            const respostaCorreta = perguntas[perguntaAtual].respostaCorreta;

            if (indice === respostaCorreta) {

                resultado.textContent = "Resposta correta!";

                botao.style.backgroundColor = "#d8f3dc";
                botao.style.borderColor = "#52b788";
                botao.style.color = "#2d6a4f";

                pontuacao++;

            } else {

                resultado.textContent = "Resposta incorreta!";

                botao.style.backgroundColor = "#ffd6d6";
                botao.style.borderColor = "#e76f51";
                botao.style.color = "#b23a48";

                const botoes = alternativas.querySelectorAll("button");

                botoes[respostaCorreta].style.backgroundColor = "#d8f3dc";
                botoes[respostaCorreta].style.borderColor = "#52b788";
                botoes[respostaCorreta].style.color = "#2d6a4f";
            }

            // Impede escolher outra alternativa
            const botoes = alternativas.querySelectorAll("button");

            botoes.forEach(function (botao) {
                botao.disabled = true;
            });

        });

        alternativas.appendChild(botao);
    });
}


proxima.addEventListener("click", function () {

    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {

        mostrarPergunta();

    } else {
        alternativas.innerHTML = "";
        proxima.style.display = "none";
        resultado.textContent =
            "Sua pontuação foi: " + pontuacao + " de " + perguntas.length;
        imagem.style.display = "block";


        if (pontuacao <= 6) {

            pergunta.innerHTML =
                "QUE PONTUAÇÃO TERRÍVEL! >:( <br> Você precisa conhecer sua namorada bem melhor, some!";

            imagem.src = "emojiputo.webp";

        }
        else if (pontuacao >= 7 && pontuacao <= 10) {

            pergunta.innerHTML =
                "Mais ou menos em! :/ <br> Você precisa conhecer sua namorada melhor, caçambolas!";
            imagem.src = "gato-bravo.webp";

        }

        else if (pontuacao == 11) {
            pergunta.innerHTML =
                "Tudo bem! :) <br> Você conhece sua namorada linda bem!";

            imagem.src = "gatinhofeliz.webp";

        }

        else if (pontuacao == 12) {

    pergunta.innerHTML =
        "PARABÉNS FOFINHO! <3 <br> Você conhece sua namorada muito bem! Ela te ama";

    imagem.src = "happycat.webp";

    const segundaImagem = document.createElement("img");
    segundaImagem.src = "gui.jpg";
    segundaImagem.classList.add("segunda-imagem");

    imagem.parentNode.appendChild(segundaImagem);
}

    }

});


mostrarPergunta();