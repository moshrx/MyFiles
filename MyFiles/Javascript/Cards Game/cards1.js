var arrayCard=[];
let sum=0;
let flag=0;
let isAlive=true;
let mes="";
let messageEl=document.getElementById("message-el");
let sumEl=document.querySelector("#sum-el");
let cardsEl=document.querySelector("#cards-el");
let playerEl=document.getElementById("player-el");
let player={
    name:"Mohd",cash:150
};
    playerEl.textContent=player.name+ ": $"+player.cash;

console.log(arrayCard);
 
  function getRandomCard(){
      let randomnumber= Math.floor(Math.random()*13)+1;
          if(randomnumber===1)
          {
              return 1;
          }
          else if(randomnumber==11|randomnumber==12|randomnumber==13){
              return 10;
          }
      else {
          return randomnumber;
      }

  }



function startGame(){
isAlive=true;
let firstCard=getRandomCard();
let secondCard=getRandomCard();
arrayCard=[firstCard,secondCard];
sum=firstCard+secondCard;
renderGame()
}
function renderGame(){
      
    cardsEl.textContent="Card: "
    for(let i=0;i<arrayCard.length;i++){
      cardsEl.textContent+=arrayCard[i]+" ";
  }


    sumEl.textContent="Sum: "+sum;
   
    if(sum<=20){
        mes="Do you want to draw the card?";
       
    }
    else if(sum===21){
        mes="You've won Black Jack!!!";
        flag=1;
    }
    else{
      mes="Sorry you're out!";
      isAlive=false;
     
    }
    messageEl.textContent=mes;
            if(flag===1){
                console.log("CASH OUT!!!");
            
            }


}

function newCard(){
  if(isAlive===true && flag===0){
      let card= getRandomCard();
      sum+=card;
      arrayCard.push(card);
      renderGame()
  }
 
}


