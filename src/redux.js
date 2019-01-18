import {createStore} from 'redux';
const initialState={
    count:0
}
const store = createStore((state=initialState)=>{
    return state;  
});


console.log(store.getState());