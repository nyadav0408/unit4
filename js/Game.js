/* Project 4 - OOP Game App
 * Game.js */

 class Game{
/**
 * creates the initial phrases and sets the missed property to 0
 */
     constructor(){
         this.missed = 0; 
         this.phrases = ["red ford pickup truck", "ruining thanksgiving football", "sweaty hands disorder", "adderall dependent", "making the fantasy football gods mad"]; 
         this.activePhrase = null;
     }
/**
 * sets the active phrase and puts it on the board and if it's a new game this if statement resets all letters and restores all lives
 * @param none
 * @return none
 */
     startGame(){
         $("#overlay").fadeOut("slow", function(){});
         if(document.getElementsByClassName('letter').length > 0){
            let ul = document.getElementsByTagName("ul")[0];
            ul.parentNode.removeChild(ul);
            let keys = $('.key');
            keys.removeClass('chosen').removeClass('wrong');
            for(let i = 0; i <keys.length; i++){
                keys[i].disabled = false;
                if(i <5){
                    document.getElementsByClassName('tries')[i].children[0].setAttribute("src", "images/liveHeart.png");
                }       
            }
         }
         this.activePhrase = new Phrase(this.getActivePhrase());
         this.activePhrase.addPhrasetoDisplay();
         this.missed = 0;
     }
/**
 * returns a random phrase from the array
 * @param none
 * @return {string} random phrase from array
 */
     getActivePhrase(){
         return this.phrases[Math.round(Math.random()*4)];
     }
/**
 * calls all the functions to show the live action on the screen
 * @param button being pressed
 * @return none
 */
     handleInteraction(e){
        e.disabled = true; 
        if(this.activePhrase.checkLetter(e.textContent)){
            this.activePhrase.showMatchedLetter(e.textContent);
            e.classList.add("chosen");
            this.checkForWin()
        }
        else{
            e.classList.add("wrong");
            this.removeLife();
        }
     }
/**
 * if user guesses a wrong letter this removes a life from the screen and adds one to the missed count
 * @param none 
 * @return none
 */
     removeLife(){
         let tries = document.getElementsByClassName('tries');
         tries[this.missed].children[0].setAttribute("src", "images/lostHeart.png");
         this.missed++; 
         if(this.missed == 5){
             this.gameOver();
         }
     }
/**
 * checks if all the letters have been filled and if so ends the game
 * @param none 
 * @return none
 */
     checkForWin(){
         let missing = document.getElementsByClassName('hide');
         if(missing.length == 0){
             this.gameOver();
         }
     }
/**
 * checks if its a win or loss then shows the appropriate message on the screen
 * @param none 
 * @return none
 */
     gameOver(){
         if(this.missed == 5){
            $("#overlay").fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).removeClass('win').addClass('lose');
            document.getElementById('game-over-message').textContent = "You lost!!!"; 
         }
         else{
            $("#overlay").fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).removeClass('lose').addClass('win');
            document.getElementById('game-over-message').textContent = "You win!!!"; 
         }
     }
 }