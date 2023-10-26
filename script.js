
const adviceBtn = document.querySelector('.advice-generator__btn-img');
const adviceNumber = document.querySelector('.advice-container__advice-number')
const adviceQuoteText = document.querySelector('.advice-container__advice-quote')

const fetchRandomAdvice = async()=>{
    const response = await fetch ("https://api.adviceslip.com")
    console.log(response)
    const advice =  await response.json()
    console.log(advice)
    // return data
}
fetchRandomAdvice()

// adviceBtn.addEventListener("click",);