const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes = [];

function complete(){
    quoteContainer.hidden = false;
    loader.hidden = true;
}

function newQuote(){
    const quote= apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    if (!quote.author){
        authorText.textContent = 'TheoYanvno';
    } else{
        quoteAuthor.textContent = quote.author;
    }
    if(quote.text.length > 50){
        quoteText.classList.add('long-quote');
    }else{
        quoteText.classList.remove('long-quote')
    }
    quoteText.textContent = quote.text;
}

async function getQuotes(){
    const apiUrl=  'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes= await response.json();
        newQuote();
    }catch(error){

    }
}

newQuoteBtn.addEventListener('click', newQuote);


getQuotes();
