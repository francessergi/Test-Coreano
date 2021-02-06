var jss = [
    ["indolent", "Que no s'afecta o commou. Insensible"],
    ["eclèctic", "Que és compost per elements molt variats i amb poca relació entre ells."],
    ["vehement", "Que actua amb passió i de manera irreflexiva"],
    ["iconoclasta", "Qui rebutja la reconeguda autoritat de mestres"],
    ["pusilànime", "Qui té ànim feble i tímid."],
    ["desassossec", "Falta de tranquilàlitat."],
    ["resiliència", "Capacitat de l'individu per a afrontar amb èxit una situació desfavorable o de risc."],
    ["condescendent", "Transigent i tolerant amb els gustos i desitjos dels demés."],
    ["circunspecte", "Qui actua amb circunspecció"],
    ["rutilant", "Que brilla o destaca per algun motiu."],
    ["peripatètic", "Ridícul i extravagant."],
    ["complaent", "Disposat a complaure. Que es complau en alguna cosa."],
    ["indulgent", "Que perdona"]
];

var js;

var expresionesBasicas = [
    ["Buenos días / Buenas noches", "Annyong"],
    ["Entiendo / No entiendo", "Ihae / nan ihaega an dwaeyo"],
    ["Hasta luego", "Annyonghi kyeseyo"],
    ["Bienvenido", "Hwan-yeong"],
    ["Gracias (muchas)", "Gamsahamnida"],
    ["Perdona / Disculpa", "Sillyehamnida"],
    ["No gracias", "Gwaenchanhseubnida"],
    ["Si / No", "Ne / Aniyo"]
];

var negocios = [
    ["Cuánto es?", "Eolmana ?"],
    ["Es barato", "Geugeos-eun maeu jeolyeom"],
    ["Es demasiado caro !", "Geugeos-eun neomu bissa"],
    ["Me encanta / Lo detesto", "Naneun salang / silh-eo"],
    ["Dinero", "Don"]
];

var transportes = [
    ["Avión", "Bihaengki"],
    ["Barco", "Boteu"],
    ["Tren", "Kicha"],
    ["Taxi", "Taeksi"],
    ["Bus / Autobús", "Beoseu"],
    ["Me gustaría alquilar", "Naneun imdaehago sip-eoyo..."],
    ["Moto", "Otobai"],
    ["Coche", "Seungyongcha"],
    ["Bici / Bicicleta", "Jajeongeo"]
];

var direcciones = [
    ["Banco", "Eunhaeng"],
    ["Estación", "Kicha yeok"],
    ["Centro Cuidad", "Dosim"],
    ["Hotel", "Hoteil"],
    ["Hospital", "Byeongwon"],
    ["Izquierda/Derecha", "Wen-jog / Orun-jog"],
    ["Norte/Sur/Este/Oeste", "Buk/nam/dong/seo"]
];

var cifras = [
    ["uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve y diez", "ana, tul, set, net, tasot, yosot, iglop, yodolp, ahop, yol"],
    ["veinte, treinta, cuarenta, cincuenta, sesenta", "sumul, sorun, mahun, shween, yesun"],
    ["setenta, ochenta, noventa", "irun, yodun, ahon,"],
    ["cien", "baeg"]
];

var horario = [
    ["Qué hora es?", "Geugeos-eun myeochsi ibnikka ?"],
    ["Cuándo?", "Eonje ?"],
    ["Ayer", "Eoje"],
    ["Hoy (mañana/tarde/noche)", "Oneul (achim/daenaj/jeonyeog)"],
    ["Mañana", "Nae-il"],
    ["Lunes, martes, miércoles, jueves, viernes, sábado, domingo", "Wol-yoil, hwayoil, suyoil, mog-yoil, geum-yoil, toyoil, il-yoil"]
];

var comida = [
    ["Tengo hambre/ tengo sed", "Baegopa / naneun mog maleun ibnida"],
    ["Estaba delicioso! / Estaba riquísimo", "Masisseosseumnida"],
    ["Qué me recomiendas?", "Mwol chucheon haeyo"],
    ["Soy vegetariano", "Jeon chaeshikjuyija"],
    ["Está demasiado caliente", "Neomu tteugeobda"],
    ["Soy alérgico(a)", "Naneun alleleugi ibnida"],
    ["Marisco", "Haesanmul"],
    ["Cacahuete", "Ttangkong"],
    ["Gluten", "Geullutin"],
    ["Agua", "Mul"],
    ["Té/café", "Hongcha / Keopi"],
    ["Cerveza/vino", "Maekju / podoju"]
];

var salud = [
    ["Dónde esta el hospital?", "Eodi byeong-won ibnida"],
    ["Me duele aquí", "Yeogi sangcheo"],
    ["Dónde estan los baños?", "Hwajangsil eun eodie issseubnikka?"],
    ["Socorro ! / Ayuda !", "Dowajuseyo!"],
    ["Policia", "Gyeongchal"],
    ["Peligro", "Wiheom"]
];

var cEsquerra = document.getElementById('contenidor-esquerra');
var cDreta = document.getElementById('contenidor-dret');
var definicions = document.getElementsByClassName('definicio');
var adjectius = document.getElementsByClassName('adjectiu');
var nom = document.getElementById("nom");
var nota = document.getElementById("nota");
var missatge = document.getElementById("final");
var jsMesclat;

function load(param) {
    if (cEsquerra.hasChildNodes()) {
        reset();
    }
    console.log(param.value);
    var x = parseInt(param.value);
    switch (x) {
        case 1:
            js = expresionesBasicas;
            break;
        case 2:
            js = negocios;
            break;
        case 3:
            js = transportes;
            break;
        case 4:
            js = direcciones;
            break;
        case 5:
            js = cifras;
            break;
        case 6:
            js = horario;
            break;
        case 7:
            js = comida;
            break;
        case 8:
            js = salud;
            break;
        default:
            console.log("default");
            break;
    }
    //3. Mesclar array i colocar les respostes.
    //4. Asociar double click i moure
    colocaAdjectius();
    jsMesclat = [].concat(js);
    shuffle(jsMesclat);
    colocaRespostes(jsMesclat);
}

//1. Visualitzar valors array.
//2. Introduir adjectius i espai buid al DIV1
function colocaAdjectius() {
    for (let index = 0; index < js.length; index++) {
        //console.log(js[index][0] + ": " + js[index][1] + "\n");
        var resposta = document.createElement('div');
        var adjectiu = document.createElement('label');
        var definicio = document.createElement('label');
        adjectiu.classList.add('adjectiu');
        adjectiu.textContent = js[index][0];
        definicio.classList.add('definicio');
        resposta.appendChild(adjectiu);
        resposta.appendChild(definicio);
        cEsquerra.appendChild(resposta);
    }
}

function colocaRespostes(param) {
    for (let index = 0; index < param.length; index++) {
        var eOpcio = document.createElement('label');
        var opcio = document.createElement('div');
        eOpcio.classList.add('opcio');
        eOpcio.textContent = param[index][1];
        eOpcio.addEventListener('click', function() {
            //console.log(this.textContent);
            ompleBuid(this.textContent);
            this.remove();
            marcaSeguent();
        });
        opcio.appendChild(eOpcio);
        cDreta.appendChild(opcio);
    }
    adjectius[0].style.border = "3px solid blue";
}

function colocaSolucio(param) {
    for (let index = 0; index < param.length; index++) {
        var eOpcio = document.createElement('label');
        var opcio = document.createElement('div');
        eOpcio.classList.add('opcio');
        eOpcio.textContent = param[index][1];
        opcio.appendChild(eOpcio);
        cDreta.appendChild(opcio);
    }
    adjectius[0].style.border = "3px solid blue";
}


//6. Botó reset. Deixa tot default.
function reset() {
    nom.value = "";
    nota.value = "";
    missatge.textContent = "";
    for (let index = 0; index < definicions.length; index++) {
        definicions[index].textContent = "";
    }
    eliminaFills('contenidor-esquerra');
    eliminaFills('contenidor-dret');
    for (let index = 0; index < adjectius.length; index++) {
        adjectius[index].style.border = "3px solid white";
        count = 0;
    }
    for (let index = 0; index < definicions.length; index++) {
        definicions[index].style.background = "white";
    }
    //colocaAdjectius();
    //colocaRespostes();
}

//7. Avaluar. Només avalua si tot esta correcte.
function avalua() {
    var avalua = true;
    var patt = /^[A-Z][a-z]*,\s[A-Z][a-z]*/;
    if (!patt.test(nom.value)) {
        //alert("Format de nom incorrecte.")
        //avalua = false;
    }
    for (let index = 0; index < definicions.length; index++) {
        if (definicions[index].textContent == "") {
            alert("Falten preguntes per respondre");
            avalua = false;
            break;
        }
    }
    if (avalua) {
        colocaSolucio(js);
        posaNota();
    }
}

function posaNota() {
    var punts = 0;
    for (let index = 0; index < definicions.length; index++) {
        if (definicions[index].textContent == js[index][1]) {
            definicions[index].style.background = "#1AD741";
            punts++;
        } else {
            definicions[index].style.background = "#E80301";
        }
    }
    if (punts > 0) {
        nota.value = (punts / definicions.length * 10).toFixed(1);
    } else {
        nota.value = 0;
    }
    missatge.textContent = nom.value + " Nota: " + nota.value;
}

/*######################### UTILS #########################*/

function ompleBuid(param) {
    for (let index = 0; index < definicions.length; index++) {
        if (definicions[index].textContent == "") {
            definicions[index].textContent = param;
            break;
        }
    }
}

function shuffle(o) {
    for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

function eliminaFills(id) {
    var pare = document.getElementById(id);
    while (pare.hasChildNodes()) {
        pare.removeChild(pare.firstChild);
    }
}

var count = 0;

function marcaSeguent() {
    adjectius[count].style.border = "3px solid transparent";
    if (count < adjectius.length - 1) {
        adjectius[++count].style.border = "3px solid blue";
    } else {
        count = 0;
    }
}