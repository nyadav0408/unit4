/* Project 4 - OOP Game App
 * Phrase.js */

 class Phrase{
/**
 * sets the actual phrase
 * @param{string} phrase-> the string 
 */
     constructor(phrase){
         this.phrase = phrase.toLowerCase(); 
     }
/**
 * adds the phrase to the screen with correct spacing
 * @return none
 */
     addPhrasetoDisplay(){
        const p = document.createElement('div'); 
        document.getElementById('phrase').appendChild(p);
        p.setAttribute("id", "letter-box");
        let inner = `<ul>`;
        for(let i = 0; i < this.phrase.length; i++){
            if(this.phrase.charAt(i) != ' '){
                inner += `<li class="hide letter ` +  this.phrase.charAt(i) + `">` + this.phrase.charAt(i) + `</li>`
            }
            else{
                inner += `<li class="space"> </li>`;
            }
        }
        inner += `</ul>`
        p.innerHTML= inner;
     }
/**
 * checks to see if the letter that the user guessed is in the phrase
 * @param{char} letter being checked
 * @return true or false
 */
     checkLetter(check){
        for(let i = 0; i < this.phrase.length; i++){
            if(this.phrase.charAt(i) == check){
                return true;
            }
        }
            return false; 
    
     }
/**
 * shows the letters in the phrase that correspond with the guessed letter
 * @param{char} letter being checked
 * @return none
 */
     showMatchedLetter(check){
         if(this.checkLetter(check)){
            let matched = $("."+check); 
            matched.removeClass('hide').addClass('show');
         }

     }
 }