import React from "react";
import Card from "./Card";


const Cardlist = ( {robots} ) => {
  // if (true) {
  //   throw new Error('NOOOOOOOOO');
  // }
  return (
    <div className="tc">
      {
        robots.map((user, i) => {
          return (
            <Card 
              tab="home" 
              key={i} 
              id={robots[i].id} 
              name={robots[i].name} 
              email={robots[i].email}
            />
          )
        })
      }
    </div>
  )
}

export default Cardlist;