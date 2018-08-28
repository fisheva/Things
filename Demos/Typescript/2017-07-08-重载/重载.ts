let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x): any {
    if (typeof x === "object"){
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickCard;
    }else if(typeof x === "number"){
        let pickedSuit = Math.floor(x/13);
        return { suit: suits[pickedSuit], card: x % 13};
    }
}