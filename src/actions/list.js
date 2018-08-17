import cardSelector from '../selectors/SelectCard';
import {deleteCard} from './card';

let id = 0;

export const addListName = (listInfo = {})=>{
    var listId = id++;
    var list = {...listInfo,listId};
    return{
        type: 'ADD_LIST',
        list
    };
    
};

export const removeList = ({listId})=>{
    // console.log("Value to removeList " , {listId});
    return{
        type: 'REMOVE_LIST',
        listId
    };
};

export const removeCardsFromList = ({listId})=>{
    return((dispatch,getState)=>{
        const allCards = getState().card.byId;
        const selectedCards = cardSelector(allCards,listId);
        // console.log("allCards ",allCards);
        // console.log("selectedCards keys", Object.keys(selectedCards));
        let p = new Promise((resolve,reject)=>{
          Object.keys(selectedCards).forEach(element => {
            //   console.log("Deleting card with id " , element);
              dispatch(deleteCard({cardId: element}));
          });
          let cardsRemoved = true;
          Object.keys(allCards).forEach((id)=>{
            if(Object.keys(selectedCards).indexOf(id) !== -1){
               console.log(`${id} did not remove`);
            }
          });

          if(cardsRemoved){
              resolve("Removed all cards");
          }else{
              reject("Unable to remove");
          }

        }).then(dispatch(removeList({listId}))); 
    });
};