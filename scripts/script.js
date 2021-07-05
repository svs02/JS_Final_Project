// get element by id
// dice image
const firstDice = document.getElementById('firstDice');
const secondDice = document.getElementById('secondDice');
const thirdDice = document.getElementById('thirdDice');
const forthDice = document.getElementById('forthDice');
//sub and total value
const mySub = document.getElementById('mySub');
const comSub = document.getElementById('comSub');
const myTotal = document.getElementById('myTotal');
const comTotal = document.getElementById('comTotal');
//buttons
const btnRoll = document.getElementById('btnRoll');
const btnReset = document.getElementById('btnReset');
const popupClose = document.getElementById('popupClose');
//popup text
const popupText = document.getElementById('popupText');

let myDice1;
let myDice2;
let comDice1;
let comDice2;
let myDiceTotal = 0;
let comDiceTotal = 0;
let rollCount = 0;


function rollDice () {
    // get random number between 1 - 6
    let myDice1 = Math.round(Math.random()*5)+1;
    let myDice2 = Math.round(Math.random()*5)+1;
    let comDice1 = Math.round(Math.random()*5)+1;
    let comDice2 = Math.round(Math.random()*5)+1;

    // place image based on random number
    firstDice.src = `images/dice_${myDice1}.png`;
    secondDice.src = `images/dice_${myDice2}.png`;
    thirdDice.src = `images/dice_${comDice1}.png`;
    forthDice.src = `images/dice_${comDice2}.png`;

    //my dice subtotal and total
    if (myDice1 == 1 || myDice2 == 1) {
        mySub.innerHTML = `Sub-total: 0`;
        myTotal.innerHTML = `Total: ${myDiceTotal}`;
    } else if (myDice1 == myDice2) {
        mySub.innerHTML = `Sub-total: ${(myDice1 * 4)}`;
        myDiceTotal += (myDice1 * 4);
        myTotal.innerHTML = `Total: ${myDiceTotal}`;
    } else {
        mySub.innerHTML = `Sub-total: ${(myDice1 + myDice2)}`;
        myDiceTotal += (myDice1 + myDice2);
        myTotal.innerHTML = `Total: ${myDiceTotal}`;
    }

    //com dice subtotal and total
    if (comDice1 == 1 || comDice2 == 1) {
        comSub.innerHTML = `Sub-total: 0`;
        comTotal.innerHTML = `Total: ${comDiceTotal}`
    } else if (comDice1 == comDice2) {
        comSub.innerHTML = `Sub-total: ${(comDice1 * 4)}`;
        comDiceTotal += (comDice1 * 4);
        comTotal.innerHTML = `Total: ${comDiceTotal}`;
    } else {
        comSub.innerHTML = `Sub-total: ${(comDice1 + comDice2)}`;
        comDiceTotal += (comDice1 + comDice2);
        comTotal.innerHTML = `Total: ${comDiceTotal}`;
    }
}

function resetGame () {
    firstDice.src = `images/dice_1.png`;
    secondDice.src = `images/dice_1.png`;
    thirdDice.src = `images/dice_1.png`;
    forthDice.src = `images/dice_1.png`;
    mySub.innerHTML = "Sub-total: 0";
    myDiceTotal = 0;
    myTotal.innerHTML = "Total: 0";
    comSub.innerHTML = "Sub-total: 0";
    comDiceTotal = 0;
    comTotal.innerHTML = "Total: 0";
    btnRoll.disabled = false;
    rollCount = 0;
}

//button for rolling thedices
btnRoll.addEventListener('click', function(){
    // add roll count by 1
    rollCount ++;
    if (rollCount < 3) {
        rollDice();
    } else {
        rollDice();
        btnRoll.disabled = true;
        if (myDiceTotal > comDiceTotal) {
            popupText.innerHTML=`You Won!`;
            $('#popup').fadeIn(500);
        } else if (myDiceTotal < comDiceTotal){
            popupText.innerHTML=`You Lost...`;
            $('#popup').fadeIn(500);
        } else {
            popupText.innerHTML=`It's a Draw!`;
            $('#popup').fadeIn(500);
        } // when draw
    }
});

//button for resting the game
btnReset.addEventListener('click', function(){
    resetGame();
});

//eventlistner for closing popups
popupClose.addEventListener('click', function(){
    $('#popup').fadeOut(500);
});

$('#ruleHideBtn').click(function() {
    $('#hideRules').slideUp();
    $('#ruleHideBtn').hide();
    $('#ruleShowBtn').show();
});

$('#ruleShowBtn').click(function() {
    $('#hideRules').slideDown();
    $('#ruleHideBtn').show();
    $('#ruleShowBtn').hide();
});

$('#playHideBtn').click(function() {
    $('#hidePlay').slideUp();
    $('#playHideBtn').hide();
    $('#playShowBtn').show();
});

$('#playShowBtn').click(function() {
    $('#hidePlay').slideDown();
    $('#playHideBtn').show();
    $('#playShowBtn').hide();
});
