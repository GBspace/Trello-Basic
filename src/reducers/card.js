const defaultCardState = {
    byId: {

    }
};


export default (state = defaultCardState, action)=>{
    switch(action.type){
        case 'ADD_CARD':
            {   
                state.byId[action.card.cardId] = { ...action.card}
                return {...state};
            };
        case 'DELETE_CARD': {
            console.log("Deleting card ", action.cardId);
            delete state.byId[action.cardId];
            console.log("updated state is " , state);
            return {...state}
        }; 
        case 'UPDATE_CARD' :{
            // console.log("state before updating ", state.byId , 
                        // "action value are " , action.cardId , " and " , action.listId);
            state.byId[action.cardId].listId = action.listId;
            // console.log("state after updation ", state.byId);
            return {...state}
        };

        case 'UPDATE_DESCRIPTION':
        {
            state.byId[action.cardId]['description'] = action.cardDescription;
            return {...state};
        };
       default:
            return state;
    };
};