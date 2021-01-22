/** @format */

let arrayImage = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg'];
arrayImage = arrayImage.concat(arrayImage); //array + array
//function of refrest item in array
arrayImage.sort(function () {
   return 0.5 - Math.random();
});

let game = {
   Image: document.getElementsByClassName('cardGame-item-image'),
   Card: document.getElementsByClassName('cardGame-item'),
   finishCard: document.getElementsByClassName('cardGame__finish'),
   counterOpenCards: document.getElementById('conterOpenCards'),
   count: 0,
   openElem: {
      first: null,
      second: null,
   },
};
//set image at blocks
for (let i = 0; i < arrayImage.length; i++) {
   game.Image[i].style.backgroundImage = 'url(image/' + arrayImage[i] + ')';
}
//set click on card and write index open cards
for (let i = 0; i < game.Card.length; i++) {
   game.Card[i].addEventListener('click', function () {
      game.Image[i].style.transform = 'rotateY(0)';
      game.counterOpenCards.innerText++;
      if (game.openElem.second != null) closeCard();
      if (game.openElem.first == null) game.openElem.first = i;
      else {
         game.openElem.second = i;
         if (game.count >= 7) finishGame();
      }
   });
}
//close cards and is disappeared if image same
function closeCard() {
   if (
      game.Image[game.openElem.first].style.backgroundImage ===
      game.Image[game.openElem.second].style.backgroundImage
   ) {
      game.Card[game.openElem.first].style.opacity = '0';
      game.Card[game.openElem.second].style.opacity = '0';
      game.openElem.second = null;
      game.openElem.first = null;
      game.count++;
   } else {
      game.Image[game.openElem.first].style.transform = 'rotateY(180deg)';
      game.Image[game.openElem.second].style.transform = 'rotateY(180deg)';
      game.openElem.second = null;
      game.openElem.first = null;
   }
}
//function is finished game and show winner message
const finishGame = function () {
   closeCard();
   game.finishCard[0].style.transform = 'rotateY(0)';
};
