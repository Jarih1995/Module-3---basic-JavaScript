const btn1 = document.querySelector('.btn-alert')
const bodyTag = document.querySelector('body')
const btn2 = document.querySelector('.btn-change')


//deel 1 
const giveAlert = function () {
    alert("Er wordt geklikt")
    console.log("Er wordt geklikt")
}
btn1.addEventListener("click", giveAlert)


// // deel 2
// const changeBackground = function (){
//     bodyTag.classList.add("red-background")
// }

// btn2.addEventListener("click", changeBackground)

// deel 3
const toggleColor = function () {
    bodyTag.classList.toggle("red-background")
}

btn2.addEventListener("click", toggleColor)
