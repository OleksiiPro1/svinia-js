'use strict';

const score0Element = document.querySelector('#score--0');
const score1Element = document.querySelector('#score--1');
const current0Element = document.querySelector('#current--0');
const current1Element = document.querySelector('#current--1');
const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');

score0Element.textContent = 0;
score1Element.textContent = 0;

const totalScores = [0, 0];
let currentScore = 0;
let actyvePlayer = 0;
let isPlaying = true;

const switchActivePlayer = function() {
    currentScore = 0;
    document.getElementById(`current--${actyvePlayer}`).textContent = currentScore;
    actyvePlayer = actyvePlayer === 0 ? 1 : 0;
    player0Element.classList.toggle('player--active');
    player1Element.classList.toggle('player--active'); 
}

diceElement.classList.add('hidden');

btnRoll.addEventListener('click', function() {

if (isPlaying) {

    const diceNumber = Math.trunc(Math.random() * 6) + 1;
    console.log(diceNumber);

    diceElement.classList.remove('hidden');
    diceElement.src = `dice${diceNumber}.png`;

    if (diceNumber !== 1) {
        currentScore += diceNumber;
        document.getElementById(`current--${actyvePlayer}`).textContent = currentScore;        
    } else{
        switchActivePlayer();
    }
}

});

btnHold.addEventListener('click', function() {
if(isPlaying){
    totalScores[actyvePlayer] += currentScore;
    document.getElementById(`score--${actyvePlayer}`).textContent = totalScores[actyvePlayer];

    if(totalScores[actyvePlayer] >= 20) {
        isPlaying = false;
        document.querySelector(`.player--${actyvePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${actyvePlayer}`).classList.remove('player--active');
        diceElement.classList.add('hidden');
    } else{switchActivePlayer();}
} 

});












