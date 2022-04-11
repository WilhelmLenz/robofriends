import React, { Fragment } from "react";
import Card from "./Card";


const Cardlist = ( {robots} ) => {
  const cardComponent = robots.map((user, i) => {
    return <Card tab="home" id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
  });
  return (
   <Fragment>
      {cardComponent}
   </Fragment>
  );
}

export default Cardlist;