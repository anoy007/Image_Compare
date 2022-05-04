import  React, { useReducer } from 'react';

import Listcontext from "./list-context";

const defaultstate = {
    items: []
}

const Listreducer = (state, action) =>{
    if(action.type === 'ADD'){
        const  updateditems = state.items.concat(action.item)
        return{
            items: updateditems
        }
    }
    return defaultstate;
}

const ListProvider = (props) => {

    const [liststate, dispatchlistaction] = useReducer(Listreducer, defaultstate  )
    
    const AdditemHandler = item => {
        dispatchlistaction({type:'ADD', item: item});
    };
    const listContext = {
        items: liststate.items,
        additem: AdditemHandler
    };
    return <Listcontext.Provider value={listContext}>
        {props.children}
    </Listcontext.Provider>
}

export  default ListProvider;