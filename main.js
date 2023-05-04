//criando mapa
mapa = [['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'], 
        ['*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*'],
        ['*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*'],
        ['*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*'],
        ['*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*'],
        ['*', ' ', ' ', ' ', ' ', ' ', '*', '*', '*', '*', ' ', ' ', ' ', ' ', '*'],
        ['*', ' ', ' ', ' ', ' ', ' ', '*', ' ', ' ', '*', ' ', ' ', ' ', ' ', '*'],
        ['*', ' ', ' ', ' ', ' ', ' ', '*', ' ', ' ', '*', ' ', ' ', ' ', ' ', '*'],
        ['*', ' ', ' ', ' ', ' ', ' ', 'D', ' ', ' ', '*', ' ', ' ', ' ', ' ', '*'],
        ['*', ' ', ' ', ' ', ' ', ' ', '*', ' ', ' ', '*', ' ', ' ', ' ', ' ', '*'],
        ['*', ' ', ' ', ' ', ' ', ' ', '*', ' ', ' ', '*', ' ', ' ', ' ', ' ', '*'],
        ['*', ' ', ' ', ' ', ' ', ' ', '*', '*', '*', '*', ' ', ' ', ' ', ' ', '*'],
        ['*', ' ', ' ', '@', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*'],
        ['*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*'],
        ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*']];

//variaveis de posição incial
posi = 2;
posj = 2;

//desenhando mapa
for (var i = 0; i < mapa.length; i++) {
    for (var j = 0; j < mapa[i].length; j++) {
        if (i == posi && j == posj) {
            document.getElementById("mapa").innerHTML += "&";
        } else  if (mapa[i][j] == " "){
            document.getElementById("mapa").innerHTML += " _ ";
        } else {
            document.getElementById("mapa").innerHTML += ` ${mapa[i][j]} `;
        }
    }
    document.getElementById("mapa").innerHTML += "<br>";
}

//movendo para baixo
function baixo(params) {
    //limpando mapa
    document.getElementById("mapa").innerHTML = "";

    //var de proxima posição
    var nextPos;
    nextPos = mapa[posi + 1][posj];

    //incrementando variável de posição
    if ((posi < mapa.length - 1) && (nextPos != "*") && (nextPos != "D")) {
        posi++;
    }

    //redesenhando mapa
    for (var i = 0; i < mapa.length; i++) {
        for (var j = 0; j < mapa[i].length; j++) {
            if (i == posi && j == posj) {
                document.getElementById("mapa").innerHTML += "&";
            } else  if (mapa[i][j] == " "){
                document.getElementById("mapa").innerHTML += " _ ";
            } else {
                document.getElementById("mapa").innerHTML += ` ${mapa[i][j]} `;
            }
        }
        document.getElementById("mapa").innerHTML += "<br>";
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
    if ((posi > 0) && (nextPos != "*") && (nextPos != "D")) {
        posi--;
    }

    //redesenhando mapa
    for (var i = 0; i < mapa.length; i++) {
        for (var j = 0; j < mapa[i].length; j++) {
            if (i == posi && j == posj) {
                document.getElementById("mapa").innerHTML += "&";
            } else  if (mapa[i][j] == " "){
                document.getElementById("mapa").innerHTML += " _ ";
            } else {
                document.getElementById("mapa").innerHTML += ` ${mapa[i][j]} `;
            }
        }
        document.getElementById("mapa").innerHTML += "<br>";
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
    if ((posj > 0) && (nextPos != "*") && (nextPos != "D")) {
        posj--;
    }

    //redesenhando mapa
    for (var i = 0; i < mapa.length; i++) {
        for (var j = 0; j < mapa[i].length; j++) {
            if (i == posi && j == posj) {
                document.getElementById("mapa").innerHTML += "&";
            } else  if (mapa[i][j] == " "){
                document.getElementById("mapa").innerHTML += " _ ";
            } else {
                document.getElementById("mapa").innerHTML += ` ${mapa[i][j]} `;
            }
        }
        document.getElementById("mapa").innerHTML += "<br>";
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
    if ((posj < mapa[posi].length - 1) && (nextPos != "*") && (nextPos != "D")) {
        posj++;
    }

    //redesenhando mapa
    for (var i = 0; i < mapa.length; i++) {
        for (var j = 0; j < mapa[i].length; j++) {
            if (i == posi && j == posj) {
                document.getElementById("mapa").innerHTML += "&";
            } else  if (mapa[i][j] == " "){
                document.getElementById("mapa").innerHTML += " _ ";
            } else {
                document.getElementById("mapa").innerHTML += ` ${mapa[i][j]} `;
            }
        }
        document.getElementById("mapa").innerHTML += "<br>";
    }
}

//funçao de interação
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

    //redesenhando mapa
    for (var i = 0; i < mapa.length; i++) {
        for (var j = 0; j < mapa[i].length; j++) {
            if (i == posi && j == posj) {
                document.getElementById("mapa").innerHTML += "&";
            } else  if (mapa[i][j] == " "){
                document.getElementById("mapa").innerHTML += " _ ";
            } else if (mapa[i][j] == "D") {
                if (chave == true) {
                    mapa[i][j] = "=";
                    document.getElementById("mapa").innerHTML += "=";
                } else {
                    document.getElementById("mapa").innerHTML += "D";
                }
            } else {
                document.getElementById("mapa").innerHTML += ` ${mapa[i][j]} `;
            }
        }
        document.getElementById("mapa").innerHTML += "<br>";
    }
}