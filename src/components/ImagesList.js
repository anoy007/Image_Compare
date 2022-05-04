import React from 'react';

import Image from './Image';
import classes from './ImageList.module.css';

const ImageList = (props) => {
  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((item) => (
        <Image
          id = {item.id}
          key={item.id}
          title={item.title}
          url={item.url}
        />
      ))}
    </ul>
  );
};

export default ImageList;
