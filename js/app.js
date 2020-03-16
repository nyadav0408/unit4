 /* Project 4 - OOP Game App
 * app.js */
let game = new Game();
let startButton = document.getElementById('btn__reset'); 
startButton.addEventListener('click', function(){game.startGame();}); 

/**
 * gives functionality to the keyboard on the screen
 */
let keys = document.getElementsByClassName("key");
document.addEventListener('click', function(event){
    if(event.target.classList.contains("key")){
        game.handleInteraction(event.target);
    }
})

/**
 * allows the user to type on the keyboard to guess letters
 */
document.addEventListener('keyup', function(event){
    for(let i = 0; i < keys.length; i++){
        if(keys[i].textContent == event.key){
            game.handleInteraction(keys[i]);
        }
    }
    }
    )

