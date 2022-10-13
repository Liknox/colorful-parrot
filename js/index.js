let bodyBtn = document.getElementById("body-btn")
let mainWingBtn = document.getElementById("main-wing-btn")
let subWingBtn = document.getElementById("sub-wing-btn")
let upperBeakBtn = document.getElementById("upper-beak-btn")
let lowerBeakBtn = document.getElementById("lower-beak-btn")
let clawBtn = document.getElementById("claw-btn")
let tailWingBtn = document.getElementById("tail-wing-btn")
let headWingBtn = document.getElementById("head-wing-btn")
let eyePatchBtn = document.getElementById("eye-patch-btn")
let eyeBtn = document.getElementById("eye-btn")
let branch = document.getElementById("branch")
let clear = document.getElementById("clear")

let colors = ["#cd0000", "#f03800", "#ffb64c", "#ff9100", "#0095ff", "#1fbf66", "#ff4380", "#deecf1", "#714c2f", "#7fe881", "#f7006a"]

let bodyClr1 = document.querySelector(".body-clr1")
let bodyClr2 = document.querySelector(".body-clr2")
let wingColor2Inner = document.querySelector(".wing-color2-inner")
let wingColor1 = document.querySelector(".wing-color1")
let wingColor2 = document.querySelector(".wing-color2")
let beakUpper = document.querySelector(".beak-upper")
let beakLower = document.querySelector(".beak-lower")
let bigParrotLeg = document.querySelector(".leg")
let tailWing1 = document.querySelector(".tail1")
let tailWing2 = document.querySelector(".tail2")
let parrotFeather = document.querySelector(".feather")
let eyePatch = document.querySelector(".eye-patch")
let parrotEye = document.querySelector(".eye")
let parrotBranch = document.querySelector(".branch")

let parrotCounter1 = 2
let parrotCounter2 = 6
let parrotCounter3 = 5
let parrotCounter4 = 0
let parrotCounter5 = 0
let parrotCounter6 = 0
let parrotCounter7 = 2
let parrotCounter8 = 2
let parrotCounter9 = 3
let parrotCounter10 = 4
let parrotCounter11 = 0

const setCounterValue = e => (e < colors.length - 1 ? e + 1 : 0)
function setBcColor(obj, counter) {
   obj.style.backgroundColor = colors[counter]

   return counter < colors.length - 1 ? counter + 1 : 0
}
function setBTop(obj, counter) {
   obj.style.borderTopColor = colors[counter]
   return counter < colors.length - 1 ? counter + 1 : 0
}

bodyBtn.addEventListener("click", () => {
   // bodyClr1.style.backgroundColor = colors[parrotCounter1]
   // bodyClr2.style.backgroundColor = colors[parrotCounter1]
   // wingColor2Inner.style.borderTopColor = colors[parrotCounter1]
   // parrotCounter1 = setCounterValue(parrotCounter1)
   setBTop(wingColor2Inner, parrotCounter1)
   setBcColor(bodyClr1, parrotCounter1)
   parrotCounter1 = setBcColor(bodyClr2, parrotCounter1)
   // console.log(parrotCounter1)
})
mainWingBtn.addEventListener("click", () => {
   // wingColor1.style.backgroundColor = colors[parrotCounter2]
   // parrotCounter2 = setCounterValue(parrotCounter2)
   parrotCounter2 = setBcColor(wingColor1, parrotCounter2)
   // console.log(parrotCounter2)
})
subWingBtn.addEventListener("click", () => {
   // wingColor2.style.borderTopColor = colors[parrotCounter3]
   // parrotCounter3 = setCounterValue(parrotCounter3)
   parrotCounter3 = setBTop(wingColor2, parrotCounter3)
   // console.log(parrotCounter3)
})
upperBeakBtn.addEventListener("click", () => {
   // beakUpper.style.backgroundColor = colors[parrotCounter4]
   // parrotCounter4 = setCounterValue(parrotCounter4)
   parrotCounter4 = setBcColor(beakUpper, parrotCounter4)
   // console.log(parrotCounter4)
})
lowerBeakBtn.addEventListener("click", () => {
   // beakLower.style.backgroundColor = colors[parrotCounter5]
   // parrotCounter5 = setCounterValue(parrotCounter5)
   parrotCounter5 = setBcColor(beakLower, parrotCounter5)
   // console.log(parrotCounter5)
})
clawBtn.addEventListener("click", () => {
   // bigParrotLeg.style.backgroundColor = colors[parrotCounter6]
   // parrotCounter6 = setCounterValue(parrotCounter6)
   parrotCounter6 = setBcColor(bigParrotLeg, parrotCounter6)
   // console.log(parrotCounter6)
})
tailWingBtn.addEventListener("click", () => {
   // tailWing1.style.backgroundColor = colors[parrotCounter7]
   // tailWing2.style.backgroundColor = colors[parrotCounter7]
   setBcColor(tailWing1, parrotCounter7)
   parrotCounter7 = setBcColor(tailWing2, parrotCounter7)
   // parrotCounter7 = setCounterValue(parrotCounter7)
   // console.log(parrotCounter7)
})
headWingBtn.addEventListener("click", () => {
   // parrotFeather.style.backgroundColor = colors[parrotCounter8]
   // parrotCounter8 = setCounterValue(parrotCounter8)
   parrotCounter8 = setBcColor(parrotFeather, parrotCounter8)
   // console.log(parrotCounter8)
})
eyePatchBtn.addEventListener("click", () => {
   // eyePatch.style.backgroundColor = colors[parrotCounter9]
   // parrotCounter9 = setCounterValue(parrotCounter9)
   parrotCounter9 = setBcColor(eyePatch, parrotCounter9)
   // console.log(parrotCounter9)
})
eyeBtn.addEventListener("click", () => {
   // parrotEye.style.backgroundColor = colors[parrotCounter10]
   // parrotCounter10 = setCounterValue(parrotCounter10)
   parrotCounter10 = setBcColor(parrotEye, parrotCounter10)
   // console.log(parrotCounter10)
})
branch.addEventListener("click", () => {
   // parrotBranch.style.backgroundColor = colors[parrotCounter11]
   // parrotCounter11 = setCounterValue(parrotCounter11)
   parrotCounter11 = setBcColor(parrotBranch, parrotCounter11)
   // console.log(parrotCounter11)
})
clear.addEventListener("click", () => {
   wingColor2.style.borderTopColor = colors[2]
   beakUpper.style.backgroundColor = colors[2]
   beakLower.style.backgroundColor = colors[3]
   wingColor1.style.backgroundColor = colors[4]
   bigParrotLeg.style.backgroundColor = colors[3]
   parrotFeather.style.backgroundColor = colors[0]
   wingColor2Inner.style.borderTopColor = colors[1]
   eyePatch.style.backgroundColor = colors[7]
   parrotEye.style.backgroundColor = colors[8]
   parrotBranch.style.backgroundColor = colors[2]
   bodyClr1.style.backgroundColor = colors[1]
   bodyClr2.style.backgroundColor = colors[1]
   tailWing1.style.backgroundColor = colors[0]
   tailWing2.style.backgroundColor = colors[0]
})
