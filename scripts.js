function saudacao() {
    alert("♣ Bem-vindo ao site dos Indigenas!! ♥");
}

function solicitarNome() {
    var nome = prompt("Qual é o nome do indigena?");
    
    if (nome != null && nome !== "") {
        alert("Olá, " + nome + "!");
    } else {
        alert("Você não inseriu seu nome de indigena.");
    }
}

function mostrarData() {
    document.getElementById("data").innerHTML = Date();
}


function mudarImagem() {
    document.getElementById("minhaImagem").src = "png/indio.jpg";
}

function restaurarImagem() {
    document.getElementById("minhaImagem").src = "png/guarani.png";  
}



function mudarImagem2() {
    document.getElementById("minhaImagem2").src = "png/ticuna.jpg";
}

function restaurarImagem2() {
    document.getElementById("minhaImagem2").src = "png/ticuna.png";  
}



function mudarImagem3() {
    document.getElementById("minhaImagem3").src = "png/ianomamis2.png";
}

function restaurarImagem3() {
    document.getElementById("minhaImagem3").src = "png/ianomami.png";  
}

function saida() {
    alert("♣ Muito obrigado por comparecer ao site dos Indigenas!! ♥");
}
function imagem1() {
    alert("♣ Os Guarani são um dos povos indígenas mais conhecidos do Brasil. Eles têm uma rica tradição oral, com histórias e mitos que explicam sua relação com a natureza. A mandioca é um alimento básico na dieta Guarani, e eles possuem uma profunda conexão espiritual com a terra. ♥");
}
function imagem2(){
    alert("♣Os Ticuna são um dos maiores grupos indígenas da Amazônia brasileira. Eles são conhecidos por suas habilidades em artesanato, especialmente em cestaria e cerâmica. A festa do Patauá, que celebra a colheita de um fruto típico, é uma das tradições mais importantes dessa tribo.♣")
}
function imagem3(){
    alert("♣Os Ianomami são um dos maiores grupos indígenas da Amazônia brasileira. Eles são conhecidos por suas habilidades em artesanato, especialmente em cestaria e cerâmica. A festa do Patauá, que celebra a colheita de um fruto típico, é uma das tradições mais importantes dessa tribo.♣")
}
function qiauto() {
    var respostaCorreta = "terra"; 
    var nome = prompt("Curiosidade! Os Guaranis têm uma forte conexão com a?");
    
    if (nome != null && resposta !== "terra") {
        if (nome.toLowerCase() === respostaCorreta.toLowerCase()) { 
            alert("Correto! Os Guaranis têm uma forte conexão com a " + resposta + "!");
        } else {
            alert("Errado! A resposta correta é 'natureza'.");
        }
    } else {
        alert("Você não inseriu sua resposta.");
    }
}

function qiauto2() {
    var nome = prompt("Curiosidade! Os ticunas são conhecidos por suas habilidades em?");
    
    if (nome != null && resposta !== "") {
        if (nome.toLowerCase() === respostaCorreta.toLowerCase()) { 
            alert("Correto! Os ticunas são conhecidos por suas habilidades em " + resposta + "!");
        } else {
            alert("Errado! A resposta correta é 'artesanato'.");
        }
    } else {
        alert("Você não inseriu sua resposta.");
    }
}
function qiauto3() {
    var respostaCorreta = "Patauá"; 
    var nome = prompt("Curiosidade! Qual o nome da famosa festa dos Ianomami?");
    
    if (nome != null && resposta !== "Patauá") {
        if (nome.toLowerCase() === respostaCorreta.toLowerCase()) { 
            alert("Correto! O nome certo é" + resposta + "!");
        } else {
            alert("Errado! A resposta correta é 'Patauá'.");
        }
    } else {
        alert("Você não inseriu sua resposta.");
    }
}
