let id = 0;
export const addCard = (cardInfoId = {}) => {
    let cardId = id++;
    let card = {...cardInfoId,cardId};
    return{
        type: 'ADD_CARD',
        card
    } 
};

/*  Below method would help to update firebase first with the new state and then udpate the state in redux store.    */
// export const startAddCard = ()=>{

// };

export const deleteCard = ({cardId})=>({
    type: 'DELETE_CARD',
    cardId
});

export const updateCard = ({cardId,listId}={})=>{
    
    return {
        type: 'UPDATE_CARD',
        cardId,
        listId
    }
};

export const updateDescription = ({cardId,cardDescription})=>({
    type: 'UPDATE_DESCRIPTION',
    cardId,
    cardDescription
});
