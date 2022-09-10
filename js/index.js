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

let parrotCounter1 = 0
let parrotCounter2 = 0
let parrotCounter3 = 0
let parrotCounter4 = 0
let parrotCounter5 = 0
let parrotCounter6 = 0
let parrotCounter7 = 0
let parrotCounter8 = 0
let parrotCounter9 = 0
let parrotCounter10 = 0
let parrotCounter11 = 0

function setCounterValue(parrotCounter) {
	return parrotCounter < colors.length - 1 ? parrotCounter + 1 : 0
}

bodyBtn.addEventListener("click", () => {
	bodyClr.forEach((item) => {
		item.style.backgroundColor = colors[parrotCounter1]
	})
	wingColor2Inner.style.borderTopColor = colors[parrotCounter1]
	parrotCounter1 = setCounterValue(parrotCounter1)
})
mainWingBtn.addEventListener("click", () => {
	wingColor1.style.backgroundColor = colors[parrotCounter2]
	parrotCounter2 = setCounterValue(parrotCounter2)
})
subWingBtn.addEventListener("click", () => {
	wingColor2.style.borderTopColor = colors[parrotCounter3]
	parrotCounter3 = setCounterValue(parrotCounter3)
})
upperBeakBtn.addEventListener("click", () => {
	beakUpper.style.backgroundColor = colors[parrotCounter4]
	parrotCounter4 = setCounterValue(parrotCounter4)
})
lowerBeakBtn.addEventListener("click", () => {
	beakLower.style.backgroundColor = colors[parrotCounter5]
	parrotCounter5 = setCounterValue(parrotCounter5)
})
clawBtn.addEventListener("click", () => {
	bigParrotLeg.style.backgroundColor = colors[parrotCounter6]
	parrotCounter6 = setCounterValue(parrotCounter6)
})
tailWingBtn.addEventListener("click", () => {
	tailWing.forEach((item) => (item.style.backgroundColor = colors[parrotCounter7]))
	parrotCounter7 = setCounterValue(parrotCounter7)
})
headWingBtn.addEventListener("click", () => {
	parrotFeather.style.backgroundColor = colors[parrotCounter8]
	parrotCounter8 = setCounterValue(parrotCounter8)
})
eyePatchBtn.addEventListener("click", () => {
	eyePatch.style.backgroundColor = colors[parrotCounter9]
	parrotCounter9 = setCounterValue(parrotCounter9)
})
eyeBtn.addEventListener("click", () => {
	parrotEye.style.backgroundColor = colors[parrotCounter10]
	parrotCounter10 = setCounterValue(parrotCounter10)
})
branch.addEventListener("click", () => {
	parrotBranch.style.backgroundColor = colors[parrotCounter11]
	parrotCounter11 = setCounterValue(parrotCounter11)
})
branch.addEventListener("click", () => {
	parrotBranch.style.backgroundColor = colors[parrotCounter11]
	parrotCounter11 = setCounterValue(parrotCounter11)
})
