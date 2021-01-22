/** @format */

let arrayImage = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg'];
arrayImage = arrayImage.concat(arrayImage); //array + array
//function of refrest item in array
arrayImage.sort(function () {
   return 0.5 - Math.random();
});
//set image at blocks
let blocksImage = document.getElementsByClassName('cardGame-item-image');
let blocksCard = document.getElementsByClassName('cardGame-item');
let finishCard = document.getElementsByClassName('cardGame__finish');
for (let i = 0; i < arrayImage.length; i++) {
   blocksImage[i].style.backgroundImage = 'url(/image/' + arrayImage[i] + ')';
}
let count = 0;
let previousElem;
for (let i = 0; i < blocksCard.length; i++) {
   blocksCard[i].addEventListener('click', function () {
      blocksImage[i].style.transform = 'rotateY(0)';
      if (previousElem != null) {
         setTimeout(function () {
            if (blocksImage[previousElem].style.backgroundImage == blocksImage[i].style.backgroundImage) {
               blocksCard[previousElem].style.opacity = '0';
               blocksCard[i].style.opacity = '0';
               count++;
               finishGame(count);
               previousElem = null;
            } else {
               blocksImage[previousElem].style.transform = 'rotateY(180deg)';
               blocksImage[i].style.transform = 'rotateY(180deg)';
               previousElem = null;
            }
         }, 1000);
      } else {
         previousElem = i;
      }
   });
}
const finishGame = function (count) {
   if (count >= 8) {
      finishCard[0].style.transform = 'rotateY(0)';
   }
};
