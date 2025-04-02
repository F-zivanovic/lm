
const quote = document.getElementById('quote');
const qouteLeft = document.getElementById('quote-left');
const qouteRight = document.getElementById('quote-right');
let index = 0;

const quotes = [
    "Gde postoji pravo, postoji i pravni lek.",
    "Nevin si dok se ne dokaže suprotno.",
    "Neka bude pravda pa makar propao svet.",
    "Pravičnost je gospodarica i kraljica svih vrlina",
    "Nepoznavanje zakona šteti"
];

qouteLeft.addEventListener('click', ()=>{
    index = (index - 1 + quotes.length) % quotes.length;
    updateQuote();
})

qouteRight.addEventListener('click', () =>{
    index = (index + 1) % quotes.length;
    updateQuote();
});

function updateQuote() { quote.textContent = `"${quotes[index]}"`;}
