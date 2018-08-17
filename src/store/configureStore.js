import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import listReducer from '../reducers/list';
import cardReducer from '../reducers/card';
// import reduceReducers from 'reduce-reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const rootReducer = reduceReducers(listReducer,cardReducer);
// console.log("RootReducer -> " , rootReducer);
export default () => {
  const store = createStore(
    combineReducers({
      // reduceReducers({
      auth: authReducer,
      list: listReducer,
      card: cardReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};


/*

  uid_key: {
    lists: {
      byIds: {
        '1':{
          listName: '',
          cards: [1,3]
        },
        '2':{
          listName: '',
          cards: [2]
        },
        '3' : {
          listName: '',
          cards: null
        }
      },
      allIds: [1,2,3]
    },
    cards: {
      byId: {
        '1' : {
            title: '',
            summary: ''
        },
        '2': {
            title: '',
            summary: ''
        },
        '3': {
             title: '',
             summary: ''
        }

      },
      allIds: [1,2,3]
    }


  }










*/