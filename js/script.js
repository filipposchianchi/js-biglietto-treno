//chiede numero chilometri e eta
var numkm = prompt("Quanti km devi fare?");
var eta = parseInt(prompt("Quanti anni hai?"));

//calcolo prezzo biglietto
var prezzo = numkm * 0.21;

//calcolo possiile sconto
if (eta < 18) {
    prezzo = prezzo - ((prezzo / 100) * 20);
}
else if (eta > 65) {
    prezzo = prezzo - ((prezzo / 100) * 40);

}
document.getElementById("km").innerHTML= numkm;
document.getElementById("prezzo").innerHTML= prezzo.toFixed(2);

console.log(prezzo.toFixed(2));