import React from "react";
import { useContext } from "react";
import Listcontext from "../store/list-context";
import classes from "./CompareItems.module.css";


const CompareItem = () => {
  const ctx = useContext(Listcontext);
  // const comparelist = (
  //   <ul>
  //     {ctx.items.map((item) => (
  //       <CompareList
  //         key={item.id}
  //         id={item.id}
  //         title={item.title}
  //         url={item.url}
  //       />
  //     ))}
  //   </ul>
  // );
  // console.log(comparelist);
  return (
    <div className={classes.main}>
      <div>
        <h1>Compare List</h1>
      </div>
     <div className={classes.content}>
     <table className={classes.table}>
        <tr>
          <th>photo</th>
          <th>id</th>
          <th>url</th>
          <th>title</th>
        </tr>
        {ctx.items.map((item, key) => {
          return <tr key={key}>
            <td><img src={item.url} style={{height: 10 , width: 10}} alt={item.id}/></td>
            <td>{item.id}</td>
            <td>{item.url}</td>
            <td>{item.title}</td>
          </tr>;
        })}
      </table>
     </div>
    </div>
  );
};

export default CompareItem;
