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

let parrotCounter1 = 5
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
function setBcColor(obj, counter, check) {
   if (check === "top") {
      obj.style.borderTopColor = colors[counter]
   } else {
      obj.style.backgroundColor = colors[counter]
   }
   return counter < colors.length - 1 ? counter + 1 : 0
}

bodyBtn.addEventListener("click", () => {
   setBcColor(wingColor2Inner, parrotCounter1, "top")
   setBcColor(bodyClr1, parrotCounter1)
   parrotCounter1 = setBcColor(bodyClr2, parrotCounter1)
})
mainWingBtn.addEventListener("click", () => {
   parrotCounter2 = setBcColor(wingColor1, parrotCounter2)
})
subWingBtn.addEventListener("click", () => {
   parrotCounter3 = setBcColor(wingColor2, parrotCounter3, "top")
})
upperBeakBtn.addEventListener("click", () => {
   parrotCounter4 = setBcColor(beakUpper, parrotCounter4)
})
lowerBeakBtn.addEventListener("click", () => {
   parrotCounter5 = setBcColor(beakLower, parrotCounter5)
})
clawBtn.addEventListener("click", () => {
   parrotCounter6 = setBcColor(bigParrotLeg, parrotCounter6)
})
tailWingBtn.addEventListener("click", () => {
   setBcColor(tailWing1, parrotCounter7)
   parrotCounter7 = setBcColor(tailWing2, parrotCounter7)
})
headWingBtn.addEventListener("click", () => {
   parrotCounter8 = setBcColor(parrotFeather, parrotCounter8)
})
eyePatchBtn.addEventListener("click", () => {
   parrotCounter9 = setBcColor(eyePatch, parrotCounter9)
})
eyeBtn.addEventListener("click", () => {
   parrotCounter10 = setBcColor(parrotEye, parrotCounter10)
})
branch.addEventListener("click", () => {
   parrotCounter11 = setBcColor(parrotBranch, parrotCounter11)
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
