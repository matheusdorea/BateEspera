document.addEventListener("keydown", function(event) {
    if (event.key === "w") {
        cima();
      }
    if (event.key === "a") {
        esquerda();
      }
    if (event.key === "s") {
        baixo();
      }
    if (event.key === "d") {
        direita();
      }
    if (event.key === "i") {
        interagir();
      }
});

//criando mapa da primeira fase
var mapa1 = [['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'], 
        ['*', ' ', ' ', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*'],
        ['*', ' ', ' ', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*'],
        ['*', ' ', ' ', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*'],
        ['*', ' ', ' ', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*'],
        ['*', '*', '*', '*', ' ', '*', '*', ' ', ' ', ' ', ' ', ' ', '*', '*', '*'],
        ['*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*', ' ', 'D'],
        ['*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*', ' ', '*'],
        ['*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*', ' ', '*'],
        ['*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*', ' ', '*'],
        ['*', ' ', '*', '*', '*', '*', ' ', ' ', ' ', ' ', ' ', ' ', '*', ' ', '*'],
        ['*', ' ', '*', ' ', ' ', '*', ' ', ' ', ' ', ' ', ' ', ' ', '*', ' ', '*'],
        ['*', ' ', ' ', '@', ' ', '*', ' ', ' ', ' ', ' ', ' ', ' ', '*', ' ', '*'],
        ['*', ' ', '*', ' ', ' ', '*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*'],
        ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*']];

//criando mapa da segunda fase
var mapa2 = [['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
            ['*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*'],
            ['*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*'],
            ['*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'O', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*'],
            ['*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*'],
            ['*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*'],
            ['*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*'],
            ['*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*'],
            ['*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*'],
            ['*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*'],
            ['*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*'],
            ['*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*'],
            ['*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*'],
            ['*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*'],
            ['*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*'],
            ['*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*'],
            ['*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*'],
            ['*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*'],
            ['*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*'],
            ['*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*'],
            ['*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*'],
            ['*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*'],
            ['*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*'],
            ['*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*'],
            ['*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*'],
            ['*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*'],
            ['*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*'],
            ['*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*'],
            ['*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*'],
            ['*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*'],
            ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*']]

//variáveis de mapa
var levelAtual;
var mapa;
mapa = mapa1;
levelAtual = 1;

//variaveis de posição incial
pos1 = [2, 2];
pos2 = [2, 2];
posi = pos1[0];
posj = pos1[1];

//variável de vida do jogador
var vida;
vida = 3;

//variavel de cor
var cor;

function iniciar() {
    document.getElementById("game").style.display = "contents";
    document.getElementById("person").style.display = "none";

    window.requestAnimationFrame(update);
}

function personalizar(params) {
    document.getElementById("person").style.display = "contents";
    document.getElementById("menu").style.display = "none";
    cor = document.getElementById("cor").value;
    document.getElementById("amostra").innerHTML = `<font color='#${cor}'> & </font>`;
}

function tutorial(params) {
    document.getElementById("tutorial").style.display = "contents";
    document.getElementById("menu").style.display = "none";
}

function voltarTut(params) {
    document.getElementById("tutorial").style.display = "none";
    document.getElementById("menu").style.display = "contents";
}

//movendo para baixo
function baixo(params) {
    //limpando mapa
    document.getElementById("mapa").innerHTML = "";

    //var de proxima posição
    var nextPos;
    nextPos = mapa[posi + 1][posj];

    //incrementando variável de posição
    if (nextPos == "#") {
        refresh();
        vida = vida - 1;
    } else if ((posi < mapa.length - 1) && (nextPos != "*") && (nextPos != "D")) {
        posi++;
    }
}

//movendo para cima
function cima(params) {
    //limpando o mapa
    document.getElementById("mapa").innerHTML = "";

    //var de proxima posição
    var nextPos;
    nextPos = mapa[posi - 1][posj];

    //incrementando variável de posição
    if (nextPos == "#") {
        refresh();
        vida = vida - 1;
    } else if ((posi > 0) && (nextPos != "*") && (nextPos != "D")) {
        posi--;
    }
}

//movendo para a esquerda
function esquerda(params) {
    //limpando mapa
    document.getElementById("mapa").innerHTML = "";

    //var de proxima posição
    var nextPos;
    nextPos = mapa[posi][posj - 1];

    //incrementando variável de posição
    if (nextPos == "#") {
        refresh();
        vida = vida - 1;
    } else if ((posj > 0) && (nextPos != "*") && (nextPos != "D")) {
        posj--;
    }
}

//movendo para a direita
function direita(params) {
    //limpando mapa
    document.getElementById("mapa").innerHTML = "";

    //var de proxima posição
    var nextPos;
    nextPos = mapa[posi][posj + 1];

    //incrementando variável de posição
    if (nextPos == "#") {
        refresh();
        vida = vida - 1;
    } else if ((posj < mapa[posi].length - 1) && (nextPos != "*") && (nextPos != "D")) {
        posj++;
    }
}

//funçao de interação
//variávle de controle de botão
var botao;
botao = false;

function interagir(params) {
    //limpando mapa
    document.getElementById("mapa").innerHTML = "";

    //variavel de controle de chave
    var chave;
    chave = false; 

    //variavel de chave
    if (mapa[posi][posj] == "@") {
        chave = true;
        mapa[posi][posj] = " ";
    }
    if (mapa[posi][posj] == "=") {
        levelAtual = levelAtual + 1;
        refresh();
    }
    if(mapa[posi][posj] == "O") {
        if (botao) {
            botao = false;
        } else {
            botao = true;
        }
    }

    //redesenhando mapa
    for (var i = 0; i < mapa.length; i++) {
        for (var j = 0; j < mapa[i].length; j++) {
            if (chave) {
                if (mapa[i][j] == "D"){
                    mapa[i][j] = "=";
                }
            }
            if (botao) {
                if (levelAtual == 2) {
                    if (mapa[i][j] == "#")
                    mapa[i][j] = "_";
                }
            } else {
                if (levelAtual == 2) {
                    if (mapa[i][j] == "_")
                    mapa[i][j] = "#";
                }
            }
        }
        document.getElementById("mapa").innerHTML += "<br>";
    }
}

//game loop
let lastTime
function update(time) {
    if(lastTime == null) {
        lastTime = time;
        window.requestAnimationFrame(update);
        return;
    }
    const delta = time - lastTime;
    console.log(delta);

    if(vida <= 0){
        gameOver();
        return
    }

    render()

    lastTime = time;
    
    window.requestAnimationFrame(update);
}

function render() {
    //apagando o mapa anterior
    document.getElementById("mapa").innerHTML = "";
    document.getElementById("vida").innerHTML = `Vida do Personagem: ${vida}`;

    //desenhando o mapa
    for (var i = 0; i < mapa.length; i++) {
        for (var j = 0; j < mapa[i].length; j++) {
            if (i == posi && j == posj) {
                document.getElementById("mapa").innerHTML += `<font color='#${cor}'>& </font>`;
            } else if (mapa[i][j] == " "){
                document.getElementById("mapa").innerHTML += "  ";
            } else if (mapa[i][j] == "@"){
                document.getElementById("mapa").innerHTML += `<font color="yellow">@ </font>`;
            } else if (mapa[i][j] == "=") {
                document.getElementById("mapa").innerHTML += `<font color="whitesmoke">= </font>`;
            } else if (mapa[i][j] == "#") {
                document.getElementById("mapa").innerHTML += `<font color="silver"># </font>`
            } else {
                document.getElementById("mapa").innerHTML += `<font color="black">${mapa[i][j]} </font>`;
            }
        }
    document.getElementById("mapa").innerHTML += "<br>";
    }
}

function refresh(params) {
    if(levelAtual == 1) {
        posi = pos1[0];
        posj = pos1[1];
        mapa = mapa1;

        render();

    } else if(levelAtual == 2) {
        posi = pos2[0];
        posj = pos2[1];
        mapa = mapa2;

        render();
    }
}

function gameOver() {
    document.getElementById("mapa").innerHTML = "Perdeste boboca";
}

//linhas de código para renderização
/*
            if (i == posi && j == posj) {
                document.getElementById("mapa").innerHTML += `<font color='#${cor}'>& </font>`;
            } else  if (mapa[i][j] == " "){
                document.getElementById("mapa").innerHTML += "  ";
            } else if (mapa[i][j] == "@"){
                document.getElementById("mapa").innerHTML += `<font color="yellow">@ </font>`;
            } else if(mapa[i][j] == "=") {
                document.getElementById("mapa").innerHTML += `<font color="whitesmoke">= </font>`;
            } else {
                document.getElementById("mapa").innerHTML += `<font color="black">${mapa[i][j]} </font>`;
            }

switch (mapa[i][j]) {
    case " ":
        document.getElementById("mapa").innerHTML += "  ";
        break;

    case "@":
        document.getElementById("mapa").innerHTML += `<font color="yellow">@ </font>`;
        break;

    case "=":
        document.getElementById("mapa").innerHTML += `<font color="whitesmoke">= </font>`;
        break;

    default:
        if (i == posi && j == posj) {
            document.getElementById("mapa").innerHTML += `<font color='#${cor}'>& </font>`;
        } else {
            document.getElementById("mapa").innerHTML += `<font color="black">${mapa[i][j]} </font>`;
        }
        break;
}*/