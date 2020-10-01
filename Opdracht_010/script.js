// Opdracht: 
// Je gaat je eerste eigen project(je) maken. Je gaat een spel maken in JavaScript! 

// Aan deze eisen moet jouw project voldoen:

// Als gebruiker wil ik een initieel bericht zien in die de gebruiker begroet en vraagt om zijn of haar naam. "Welkom! Wat is je naam?" Hoe vraag je de gebruiker om input?

// Input van de gebruiker in de browser

// Als gebruiker wil ik mijn naam kunnen invoeren in de browser en op enter drukken.

// Als gebruiker wil ik nadat ik mijn naam heb ingevoerd, een bericht terug zien: "Hey [naam]"

// Als gebruiker wil ik na de begroeting met mijn naam gevraagd worden om een nieuwe input met een cijfer. e.g: "Voer een nummer in van 0 tot 25 om te beginnen met raden..."

// Als spelmaker wil ik dat de gebruiker wel een reeële kans heeft om te winnen. Daarom pak ik een willekeurig getal van 0 tot 25. Hint: gebruikt Math.random()

// Als gebruiker wil ik een nummer in kunnen voeren, dmv een prompt en vervolgens op enter klikken.

// Als gebruiker wil ik een negatief bericht zien dmv een alert() als ik het nummer verkeerd heb geraden e.g. "Dat is niet correct" . Daarna wil ik gevraagd worden om opnieuw te raden.

// Als gebruiker wil ik een positief bericht ontvangen dmv een alert() als ik het nummer goed heb geraden. e.g: "Gefeliciteerd je hebt gewonnen". Het spel is nu af.

// Als gebruiker wil ik een bericht zien als het spel af is. "e.g: Dag [naam]. Tot de volgende keer"

let name = prompt("Welkom! Wat is je naam?", "naam");
let greet = confirm("hallo" + name)

let randomNumber = Math.floor(Math.random() * 10) + 1;

let game = prompt("Voer een nummer in van 0 tot 25 om te beginnen met raden...", "0-25")

if (
    randomNumber === game) {
    alert("Je hebt gelijk")
} else {
    let game = prompt("Probeer het nog eens", "0-25")
}

let bye = confirm("Dag" + name)


// How to loopie?