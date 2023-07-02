// Dom Elements
const hourEl = document.querySelector('.hour') // hour element
const minuteEl = document.querySelector('.munites') // munite element
const displayEL = document.querySelector('.display')// display element

// function buttons
const acEl = document.querySelector('.ac')
const pmEl = document.querySelector('.pm')
const percentEl = document.querySelector('.percent')

// operator buttons
const divisionEl = document.querySelector('.division')
const multipicationonEl = document.querySelector('.multiplication')
const subtractionEl = document.querySelector('.subtraction')
const additionEl = document.querySelector('.addition')
const equalnEl = document.querySelector('.equal')

// number buttons
const decimalEl = document.querySelector('.decimal')
const number0El = document.querySelector('.number-0')
const number1El = document.querySelector('.number-1')
const number2El = document.querySelector('.number-2')
const number3El = document.querySelector('.number-3')
const number4El = document.querySelector('.number-4')
const number5El = document.querySelector('.number-5')
const number6El = document.querySelector('.number-6')
const number7El = document.querySelector('.number-7')
const number8El = document.querySelector('.number-8')
const number9El = document.querySelector('.number-9')




const numberElArray = [
    number0El, number1El, number2El, number3El, number4El,
    number5El, number6El, number7El, number8El, number9El
];

//Functions
const handleNumberClick = (numStr) => {
    const currentDisplayStr = displayEL.textContent;
    displayEL.textContent = currentDisplayStr + numStr;
}

// Add Event Listeners to numbers and buttons
for (let i = 0; i < numberElArray.length; i++) {
    const numberEL = numberElArray[i];
    numberEL.addEventListener('click', () => {
        handleNumberClick(i.toString())
    })
}
// 



// Set up time 

const updateTime = () => {
    const currentTime = new Date()

    let currentHour = currentTime.getHours()
    let currentMunite = currentTime.getMinutes()

    if (currentHour > 12) {
        currentHour -= 12;
    }

    hourEl.innerHTML = currentHour.toString()
    minuteEl.innerHTML = currentMunite.toString().padStart(2, '0')


}

setInterval(updateTime, 1000)
updateTime()
// 
