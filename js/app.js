/*
 * Create a list that holds all of your cards
 */

/*definingcards*/
let card = document.getElementsByClassName("card");
/*
 * Add empty array of cards
 */
let cards = [...card];

console.log(cards); /*testing it prints an array*/


/*
 * Add empty array of opened cards
 */
var openedCards = [];


/*defining deck*/
const deck = document.getElementById("deckOfCards");


/*stars
let moves = 0;
let movesCounter =document.querySelector('.moves');
movesCounter.innerHTML = moves;
*/

/*stars
let stars = "";
let starsCounter =document.querySelector('.stars');
starsCounter.innerHTML = stars;
*/


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
// Shuffle function from http://stackoverflow.com/a/2450976*/
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;

    console.log("shuffle function working");
}


/*
 * Begin the game function
 */



 function playGame(){

var shuffleDeck = shuffle(cards);

var i;
for (var i = 0; i < shuffleDeck.length; i++) {
	deck.innerHTML = "";
 [].forEach.call(shuffleDeck, function(item){

deck.appendChild(item);

 });
cards[i].classList.remove("show", "open", "match", "disable");

}
 console.log("playGame function working");
 }

 window.onload = playGame();

/*
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
 


/*
 * set up the event listener for a card. If a card is clicked:
 will go to funtion showCard
 */

 
 for (var i = 0; i < cards.length; i++) {

 cards[i].addEventListener("click", showCard);
 cards[i].addEventListener("click", openCards);

   console.log("event listener working");

};


 /*
 *  - display the card's symbol (put this functionality in another function that you call from this one)
  */


function showCard(){
this.classList.toggle("open");
this.classList.toggle("show");
this.classList.toggle("disable");

 console.log("showCard function working");


};

 /*
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 */
function openCards() {
    openedCards.push(this);
    var cards = openedCards.length;
if (cards === 2) {
if(openedCards[0].value === openedCards[1].value){
   cardsMatched();
}else {
	noMatch();
}
}

console.log("opecards function working");
};
 

  /*
 
 *  - if the list already has another card, check to see if the two cards match
*/

function cardsMatched(){
    openedCards[0].classList.add("match", "disable");
    openedCards[1].classList.add("match", "disable");
    openedCards[0].classList.remove("show", "open","no-event");
    openedCards[1].classList.remove("show", "open", "no-event");
    openedCards = [];

 console.log("Match function working");

}


function noMatch(){
    openedCards[0].classList.add("unmatched");
    openedCards[0].classList.add("unmatched");
    openedCards[1].classList.add("unmatched");
    disable();
    setTimeout(function(){
        openedCards[0].classList.remove("show", "open", "no-event","unmatched");
        openedCards[1].classList.remove("show", "open", "no-event","unmatched");
        enable();
        openedCards = [];
    },1100);
     console.log("noMatch function working");
}







    










 /*
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
 
