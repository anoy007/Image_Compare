import React, { useState } from 'react';
import { useContext } from 'react';
import Listcontext from '../store/list-context';

import classes from './Image.module.css';

const Image = (props) => {
  const  ctx = useContext(Listcontext);
  const [isadd, setisadd] = useState(false);

  const additemtolisthandler = () => {
    ctx.additem({
      id: props.id,
      url: props.url,
      title: props.title
    })
    setisadd(true);
  }
  return (
    // <li className={classes.movie}>
    //   <h2>{props.title}</h2>
    //   <img src={props.releaseDate} style={{height: 20}}/>
    //   <p>{props.openingText}</p>
    // </li>
    <article className={classes.article}>
      <img src ={props.url} alt={props.title} style={{height:20 , weidht:20}}/>
      <h2>{props.title}</h2>
      <h3>{props.id}</h3>
      <p>{props.url}</p>
      <button onClick ={additemtolisthandler}>  compare </button>

    </article>
  );
};

export default Image;
