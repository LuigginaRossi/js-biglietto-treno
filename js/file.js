//chiedo informazioni all'utente

const nameUser = prompt("Inserisci il nome completo del passeggero");

const ageUser = parseInt(prompt("Inserisci età del passeggero"));

const km = parseInt(prompt("Inserisci il numero di km che devi percorrere"));

//trovo elemento nell'html

const divPassangerInfo = document.getElementById("passenger-info");
const divPriceTicket = document.getElementById("ticket-price");


//calcolo prezzo biglietto:

const priceTicket = km * .21;

console.log(priceTicket);

//sconto 20% per minorenni

const discount20 = priceTicket * .8;

console.log(discount20)

//sconto 40% over 65
const discount40 = priceTicket * .6;

console.log(discount40)

//modifico valori nell'html

divPassangerInfo.innerHTML = `Passeggero: ${nameUser}. <br> Età: ${ageUser} anni. <br> Percorrenza: ${km}Km.`

console.log(divPassangerInfo);

//condizioni:

if (ageUser <= 17) {
    alert("In quanto minorenne viene applicato uno sconto del 20%");
    divPriceTicket.innerHTML = `Il prezzo del tuo biglietto è: ${discount20}`;
    
    console.log(div)
} else if (ageUser >= 65) {
    alert("In quanto over 65 ti è stato applicato uno sconto del 40%");
    divPriceTicket.innerHTML = `Il prezzo del tuo biglietto è: ${discount40}`;
} else {
    divPriceTicket.innerHTML = `Il prezzo del tuo biglietto è: ${priceTicket}`;
}
