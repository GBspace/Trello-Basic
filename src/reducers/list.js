
const defaultListState = {
    byId: {

    }
};

export default (state=defaultListState, action)=>{
    switch(action.type) {
        case 'ADD_LIST':{
                // console.log("...action.listId" , action.list);
                state.byId[action.list.listId] = {...action.list};
                return {...state};
            }
        case 'REMOVE_LIST': {
            // console.log("action.listId ->" , action.listId);
            // console.log("type of action.listId ->" , typeof(action.listId));
            delete state.byId[action.listId];
            // console.log("updatedList is -->" , updatedList);
            return {...state};
           
        }
     
        default:
            return state;
    };
};