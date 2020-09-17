
const myAge = 44;
const name = "Henk";
const totalAmount = 20.93;




if (myAge >= 18 && myAge <= 25) {
    console.log("Je krijgt 50% korting!")
} else {
    console.log("Het biertje kost €2,50 ")
}

if (name == "Sarah" || name == "Abraham") {
    console.log("Je krijgt een gratis biertje")
} else {
    console.log("Het biertje kost €2,50 ")
}

if (totalAmount >= 25 && totalAmount < 50) {
    console.log("Gefeliciteerd, je krijgt een portie gratis (vega)bitterballen!")
} else if (totalAmount >= 50 && totalAmount < 100) {
    console.log("Gefeliciteerd, je krijgt een portie gratis nachos!")
} else if (totalAmount >= 100) {
    console.log("Gefeliciteerd, je krijgt een gratis fles champagne!")
} else {
    console.log("Bedankt voor uw bezoek!")
}