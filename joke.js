const jokeContainer = document.getElementById('joke-container');
const jokeText = document.getElementById('joke');
const newJokeBtn = document.getElementById('new-joke');


let apiJokes = [];



function newJoke(){
    const joke= apiJokes[Math.floor(Math.random() * apiJokes.length)];
    return JokeText.textContent = joke.text;
}
    


async function getJokes(){
    const apiUrl=  'http://icanhazdadjoke.com';
    try {
        const response = await fetch(apiUrl);
        apiJokes= await response.json();
        newJoke();
    }catch(error){

    }
}


newJokeBtn.addEventListener('click', newJoke);


getJokes();
