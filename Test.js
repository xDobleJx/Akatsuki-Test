const respuestas = ["itachi", "kisame", "tobi", "zetsu", "hidan", "kakuzu", "konan", "sasori", "deidara", "pain"];

function egiaztatu() {
    let correctas = 0;
    for (var i = 0; i < respuestas.length; i++) {
        if (document.getElementById(i).value.toLowerCase() == respuestas[i]) {
            document.getElementById(i).style.borderColor = "#008000";
            correctas++;
        }
        else {
            document.getElementById(i).style.borderColor = "ff0000";
        }
    }

    if (correctas == 10) {
        document.getElementById("grandote").style.borderColor = "#008000";
    }
        document.getElementById("resultados").innerHTML = correctas;
}