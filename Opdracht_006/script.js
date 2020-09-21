
// Opdracht: Opdracht: JavaScript Functies (Conceptueel)


//deel 1 

/* makeASandwich
    Pak een snee brood.
    Voeg een ingredient toe.
    Leg een snee brood er bovenop.
*/

function makeFirstSandwich() {
    console.log('Pak een snee brood')
    console.log('Voeg een ingredient toe')
    console.log('Leg een snee brood er bovenop')
}

makeFirstSandwich();


//deel 2


function makeSandwich(filling) {
    console.log("There you go, a sandwich with" + " " + filling)
    console.log('Pak een snee brood')
    console.log("Voeg een" + " " + filling + " " + "toe")
    console.log('Leg een snee brood er bovenop')
}


makeSandwich('ham');

// Je declareerd ze tussen de functie {}
// Je call aan het eind van je functie. 
makeSandwich('Kip');



//deel 3


function calculateDiscountedPrice(totalAmount, discount) {
    return totalAmount - discount;
}

console.log(calculateDiscountedPrice(Math.round(30.20), (2.50)));


// math.round checken!!!



// deel 4

const totalAmount = 40;

function calculateDiscountedPriceSecond(totalAmount, discount) {
    return totalAmount - discount;
}

if (totalAmount > 25) {
    console.log(calculateDiscountedPriceSecond(totalAmount, 2.50));
} else {
    console.log(calculateDiscountedPriceSecond(totalAmount, 0.0));
}

// checken hoe of wat?? 