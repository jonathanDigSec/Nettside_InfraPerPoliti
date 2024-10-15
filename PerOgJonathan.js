//lavrans stinker tåfis

class Jacobsen{
    constructor(navn, calorier, burger, beer, snus) {
        this.navn = "Halsbrekkeren";
        //this.calorier = calorier;
        //this.burger = burger;
        //this.beer = beer;
        this.snus = "Epok freeze no7 s5";
    }
    melding() {
            console.log(`${this.navn} er glad i ${this.snus}`)
    }
}
const instance = new Jacobsen;
instance.melding();

// Sett opp en variabel for å holde styr på antall klikk
let clickCounter = 0;

// Finn knappen og <p> elementet i HTML
const button = document.getElementById("myButton");
const clickCountDisplay = document.getElementById("clickCount");
const alertMessage = document.getElementById("alertMessage"); // For varsling på siden
// Legg til en 'click' hendelse på knappen
button.addEventListener("click", function() {
    // Øk klikk-telleren
    clickCounter++;
    if (clickCounter === 25) {
        // Vis en melding med alert()
        alert("Jonathan må cutte nå! Ikke gi han flere calorier! :O");
    };

    if (clickCounter === 50) {
        alert("NÅ HOLDER DET! Jonathan kan ikke håndtere flere kalorier!!!!!!")
    };
    // Oppdater tekstinnholdet for å vise antall klikk
    clickCountDisplay.textContent = "Antall kalorier: " + clickCounter;
});







