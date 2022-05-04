import React  from "react";

const  Listcontext = React.createContext({
    items: [],
    additem: (item) => {}
    
})

export default Listcontext;