import React, { useEffect, useState } from 'react';

import ImageList from './components/ImagesList';
import './App.css';
import CompareItem from './components/CompareItems';
import ListProvider from './store/Listprovider';

function App() {
   const [data, setdata] = useState([]);

   useEffect(()=>{
     const fetchdata = async () => { 
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        const data = await response.json();
        setdata(data);
      }
      fetchdata()
    
   }, []);

   console.log(data);
  
  return (
    <ListProvider>
      <section>
      <ImageList movies={data} />
      </section>
      
      <CompareItem/>
      
    </ListProvider>
  );
}

export default App;
