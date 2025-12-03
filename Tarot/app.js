/**
 * Sorteio de Tarot
 * @author Luiz Henrique Rodrigues Nunes
 */

function sortear() {

    let numeros = [
        "0","I","II","III","IV","V","VI","VII","VIII","IX","X",
        "XI","XII","XIII","XIV","XV","XVI","XVII","XVIII","XIX","XX","XXI"
    ]

    let nomes = [
        "O Louco","O Mago","A Sacerdotisa","A Imperatriz","O Imperador",
        "O Papa","Os Enamorados","O Carro","A Justiça","O Eremita",
        "A Roda da Fortuna","A Força","O Enforcado","A Morte",
        "A Temperança","O Diabo","A Torre","A Estrela","A Lua",
        "O Sol","O Julgamento","O Mundo"
    ]

    // único sorteio
    let i = Math.floor(Math.random() * numeros.length);

    let numero = numeros[i];
    let nome   = nomes[i];

    document.getElementById('supMeio').innerHTML = `<div>${numero}</div>`;

    let cc = document.getElementById('centroCarta');

    if (nome === "O Louco") {
        cc.innerHTML = `<img src="./img/olouco.png">`;
    } else if (nome === "O Mago") {
        cc.innerHTML = `<img src="./img/omago.png">`;
    } else if (nome === "A Sacerdotisa") {
        cc.innerHTML = `<img src="./img/asacerdotisa.png">`;
    } else if (nome === "A Imperatriz") {
        cc.innerHTML = `<img src="./img/aimperatriz.png">`;
    } else if (nome === "O Imperador") {
        cc.innerHTML = `<img src="./img/oimperador.png">`;
    }else if (nome === "O Papa") {
        cc.innerHTML = `<img src="./img/opapa.png">`;
    }else if (nome === "Os Enamorados") {
        cc.innerHTML = `<img src="./img/osenamorados.png">`;
    }else if (nome === "O Carro") {
        cc.innerHTML = `<img src="./img/ocarro.png">`;
    }else if (nome === "A Justiça") {
        cc.innerHTML = `<img src="./img/ajustiça.png">`;
    }else if (nome === "O Eremita") {
        cc.innerHTML = `<img src="./img/oeremita.png">`;
    }else if (nome === "A Roda da Fortuna") {
        cc.innerHTML = `<img src="./img/aroda.png">`;
    }else if (nome === "A Força") {
        cc.innerHTML = `<img src="./img/aforca.png">`;
    }else if (nome === "O Enforcado") {
        cc.innerHTML = `<img src="./img/oenforcado.png">`;
    }else if (nome === "A Morte") {
        cc.innerHTML = `<img src="./img/amorte.png">`;
    }else if (nome === "A Temperança") {
        cc.innerHTML = `<img src="./img/atemperanca.png">`;
    }else if (nome === "O Diabo") {
        cc.innerHTML = `<img src="./img/odiabo.png">`;
    }else if (nome === "A Torre") {
        cc.innerHTML = `<img src="./img/atorre.png">`;
    }else if (nome === "A Estrela") {
        cc.innerHTML = `<img src="./img/aestrela.png">`;
    }else if (nome === "A Lua") {
        cc.innerHTML = `<img src="./img/alua.png">`;
    }else if (nome === "O Sol") {
        cc.innerHTML = `<img src="./img/osol.png">`;
    }else if (nome === "O Julgamento") {
        cc.innerHTML = `<img src="./img/ojulgamento.png">`;
    }else if (nome === "O Mundo") {
        cc.innerHTML = `<img src="./img/omundo.png">`;
    }


    document.getElementById('infMeio').innerHTML = `<div>${nome}</div>`;
}

