// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
  }

 const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);

function writeCards(lst){
    let newObj= []
    for(let i = 0; i < lst.length; i++){
        let a = "Thank you," + " " + lst[i] + "," + " for the wonderful surprise gift!"
        newObj.push(a)
    }
    return newObj
}

function countDown(a){
    while (a >= 0) {
      console.log(a--)
    }
  }