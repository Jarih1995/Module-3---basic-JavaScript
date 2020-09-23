

const calculateSupply = function(age, amountPerDay){
    let maxAge = 90;
    let amountPerDay = 1 * 365
    let money = age * amountPerDay;
    console.log("You will need" + money + "to last you until the ripe old age of" + maxAge );
}
calculateSupply(80, 500);


// const calculateSupply = function(age, numPerDay) {
//     const maxAge = 100;
//     const totalNeeded = numPerDay * 365 * (maxAge - age);
//     let message =
//       "You will need " +
//       totalNeeded +
//       " cups of tea to last you until the ripe old age of " +
//       maxAge;
//     console.log(message);
//   };
  
//   calculateSupply(28, 36);
//   calculateSupply(28, 2.5);
//   calculateSupply(28, 400);