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

let colors = ["#cd0000", "#f03800", "#ffb64c", "#ff9100", "#0095ff", "#1fbf66", "#ff4380", "#deecf1", "#714c2f", "#7fe881", "#f7006a"]

let bodyClr = document.querySelectorAll(".body-clr")
let wingColor2Inner = document.querySelector(".wing-color2-inner")
let wingColor1 = document.querySelector(".wing-color1")
let wingColor2 = document.querySelector(".wing-color2")
let beakUpper = document.querySelector(".beak-upper")
let beakLower = document.querySelector(".beak-lower")
let bigParrotLeg = document.querySelector(".leg")
let tailWing = document.querySelectorAll(".tail-wing")
let parrotFeather = document.querySelector(".feather")
let eyePatch = document.querySelector(".eye-patch")
let parrotEye = document.querySelector(".eye")
let parrotBranch = document.querySelector(".branch")

let counter1 = 0
let counter2 = 0
let counter3 = 0
let counter4 = 0
let counter5 = 0
let counter6 = 0
let counter7 = 0
let counter8 = 0
let counter9 = 0
let counter10 = 0
let counter11 = 0

function setCounterValue(counter) {
	return counter < colors.length - 1 ? counter + 1 : 0
}

bodyBtn.addEventListener("click", () => {
	bodyClr.forEach((item) => {
		item.style.backgroundColor = colors[counter1]
	})
	wingColor2Inner.style.borderTopColor = colors[counter1]
	counter1 = setCounterValue(counter1)
})
mainWingBtn.addEventListener("click", () => {
	wingColor1.style.backgroundColor = colors[counter2]
	counter2 = setCounterValue(counter2)
})
subWingBtn.addEventListener("click", () => {
	wingColor2.style.borderTopColor = colors[counter3]
	counter3 = setCounterValue(counter3)
})
upperBeakBtn.addEventListener("click", () => {
	beakUpper.style.backgroundColor = colors[counter4]
	counter4 = setCounterValue(counter4)
})
lowerBeakBtn.addEventListener("click", () => {
	beakLower.style.backgroundColor = colors[counter5]
	counter5 = setCounterValue(counter5)
})
clawBtn.addEventListener("click", () => {
	bigParrotLeg.style.backgroundColor = colors[counter6]
	counter6 = setCounterValue(counter6)
})
tailWingBtn.addEventListener("click", () => {
	tailWing.forEach((item) => (item.style.backgroundColor = colors[counter7]))
	counter7 = setCounterValue(counter7)
})
headWingBtn.addEventListener("click", () => {
	parrotFeather.style.backgroundColor = colors[counter8]
	counter8 = setCounterValue(counter8)
})
eyePatchBtn.addEventListener("click", () => {
	eyePatch.style.backgroundColor = colors[counter9]
	counter9 = setCounterValue(counter9)
})
eyeBtn.addEventListener("click", () => {
	parrotEye.style.backgroundColor = colors[counter10]
	counter10 = setCounterValue(counter10)
})
branch.addEventListener("click", () => {
	parrotBranch.style.backgroundColor = colors[counter11]
	counter11 = setCounterValue(counter11)
})
