import Sounds from "./sounds.js"

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonAddTime = document.querySelector('.add-time')
const buttonSubTime = document.querySelector('.sub-time')

const buttonForest = document.querySelector('.forest')
const buttonRain = document.querySelector('.rain')
const buttonCoffe = document.querySelector('.coffe-shop')
const buttonFireplace = document.querySelector('.fireplace')

let minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')

let initialMinutes = minutesDisplay.textContent
let minutes = Number(minutesDisplay.textContent)
let seconds
let currentSeconds = 0
let currentMinutes

let countdownTime

const sound = Sounds()

function updateDisplay(minutes, seconds) {
  if (minutes < 0) {
    minutes = 0
  }
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function addTime() {
  currentMinutes = Number(minutes) + 5
  minutes = currentMinutes
}

function subTime() {
  currentMinutes = Number(minutes) - 5
  minutes = currentMinutes
}

function resetControls() {
  buttonStop.classList.add('hide')
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
  buttonSet.classList.remove('hide')
}

function resetSelect() {
  buttonForest.classList.remove('select')
  buttonRain.classList.remove('select')
  buttonCoffe.classList.remove('select')
  buttonFireplace.classList.remove('select')
}

function countdown() {
  countdownTime = setTimeout(function() {
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)
    let isFinished = seconds <= 0 && minutes <= 0

    if (isFinished) {
      updateDisplay(initialMinutes, 0)
      resetControls()
      sound.pauseSounds()
      resetSelect()
      return
    }

    if (seconds <= 0) {
      seconds = 60
      --minutes
    }

    updateDisplay(minutes, (seconds - 1))
    currentSeconds = seconds - 1
    currentMinutes = minutes - 1

    countdown()
  }, 1000) 
}

buttonPlay.addEventListener('click', function() {
  buttonPlay.classList.add('hide')
  buttonSet.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonStop.classList.remove('hide')

  countdown()
})

buttonPause.addEventListener('click', function() {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')

  clearTimeout(countdownTime)
})

buttonStop.addEventListener('click', function() {
  resetControls()
  clearTimeout(countdownTime)
  updateDisplay(minutes, 0)
})

buttonAddTime.addEventListener('click', function() {
  addTime()
  updateDisplay(currentMinutes, currentSeconds)
})

buttonSubTime.addEventListener('click', function() {
  subTime()
  updateDisplay(currentMinutes, currentSeconds)
})

buttonSet.addEventListener('click', function() {
  let newMinutes = prompt("Quantos minutos?") || 0

  minutes = newMinutes
  updateDisplay(minutes, 0)
})

buttonForest.addEventListener('click', function() {
  resetSelect()
  buttonForest.classList.add('select')

  sound.forestSound()
})

buttonRain.addEventListener('click', function() {
  resetSelect()
  buttonRain.classList.add('select')

  sound.rainSound()
})

buttonCoffe.addEventListener('click', function() {
  resetSelect()
  buttonCoffe.classList.add('select')

  sound.coffeSound()
})

buttonFireplace.addEventListener('click', function() {
  resetSelect()
  buttonFireplace.classList.add('select')

  sound.fireplaceSound()
})