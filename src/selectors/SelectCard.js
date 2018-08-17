export default (cards,listId)=>{
    // console.log("All the cards are -->" , cards);
    // console.log("All the cards are -->" , Object.entries(cards));
    // console.log("List ID passed is -->", listId);
    let filteredArr = Object.entries(cards).reduce((newCard = {}, card)=>{
        
        // console.log("card[1].listid  --> " , card[1].listId);
        if(listId === card[1].listId){
            // newCard = {...newCard,...card};
            newCard[card[0]] = card[1]; 
        }
        // console.log("newCard is ", newCard);
        return newCard;
       
    },{});

    // console.log("filteredArr is -->" , filteredArr);
    return filteredArr;

    
};