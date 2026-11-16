
function formatar(n) {
    return n.toLocaleString("pt-BR", { maximumFractionDigits: 2 });
}

document.getElementById("calcular").addEventListener("click", function () {
 
    const a = Number(document.getElementById("a").value);
    const b = Number(document.getElementById("b").value);
    const c = Number(document.getElementById("c").value);
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    const saida = document.getElementById("resultado");

  
    if (!a || !b || !c || a < 0 || b < 0 || c < 0) {
        saida.innerHTML = '<p class="erro">Preencha os três campos com números maiores que zero.</p>';
        return;
    }

   ///Gilvan deu erro favor arruma 
   ///Deixa quieto eu linkei errado a mrd do js já deu boa

    let x, passos;
    if (tipo === "direta") {
        x = (b * c) / a;
        passos = [
            "Relação <b>direta</b>: as colunas andam no mesmo sentido.",
            "Multiplique em cruz: " + formatar(a) + " · x = " + formatar(b) + " · " + formatar(c),
            "x = (" + formatar(b) + " · " + formatar(c) + ") ÷ " + formatar(a)
        ];
    } else {
        x = (a * b) / c;
        passos = [
            "Relação <b>inversa</b>: inverta uma das colunas antes de multiplicar.",
            "Fica: " + formatar(c) + " · x = " + formatar(a) + " · " + formatar(b),
            "x = (" + formatar(a) + " · " + formatar(b) + ") ÷ " + formatar(c)
        ];
    }

    saida.innerHTML =
        passos.map(function (p) { return '<div class="passo">' + p + "</div>"; }).join("") +
        '<div class="final">x = ' + formatar(x) + "</div>";
});

const imagem = document.getElementById("siu");
const som = new Audio("audio/siu.mp3");

imagem.addEventListener("click", function () {
    som.currentTime = 0; // 
    som.play();
});