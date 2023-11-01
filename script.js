const adviceBtn = document.querySelector('.advice-generator__btn-img');
const adviceNumber = document.querySelector('.advice-container__advice-number')
const adviceQuoteText = document.querySelector('.advice-container__advice-quote')

const fetchRandomAdvice = async()=>{
    // fetch data from API
    const response = await fetch ("https://api.adviceslip.com/advice")
    const data = await response.json()
    console.log(data)
    const advice = data.slip
    adviceNumber.textContent = `ADVICE #${advice.id}`
    adviceQuoteText.textContent = `"${advice.advice}"`
}

// const generateAdvice= async()=>{
//     const quotes = await fetchRandomAdvice()
//     const adviceWord = quotes.slip
//     console.log(adviceWord)
//     adviceNumber.textContent = `ADVICE ${adviceWord.id}`
//     adviceQuoteText.textContent = `"${adviceWord.advice}"`
// }

// adviceBtn.addEventListener("click", generateAdvice);
adviceBtn.addEventListener("click",fetchRandomAdvice);