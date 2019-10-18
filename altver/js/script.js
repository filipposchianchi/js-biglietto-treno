//chiede numero chilometri e eta
var numkm = parseInt(prompt("Quanti km devi fare?"));
var eta = parseInt(prompt("Quanti anni hai?"));

console.log(numkm);
console.log(eta);

if ( (isNaN(numkm)) || (isNaN(eta))) {
    document.getElementById("km").innerHTML= "Dati inseriti non corretti..."
} else {

    //calcolo prezzo biglietto
    var prezzo = numkm * 0.21;

    //calcolo possiile sconto
    if (eta < 18) {
        prezzo = prezzo - ((prezzo / 100) * 20);
    }
    else if (eta > 65) {
        prezzo = prezzo - ((prezzo / 100) * 40);

    }
    document.getElementById("km").innerHTML="Devi percorrere " + numkm + " km.";
    document.getElementById("prezzo").innerHTML= "Il tuo biglietto costerà " + prezzo.toFixed(2) + " €";
}
