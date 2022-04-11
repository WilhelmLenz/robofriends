import React, { Fragment } from "react";


const Card = function(props) {
  const { name, email, id } = props
    return (
      <div className="tc bg-light-green dib br3 pa3 ma2 grow">
        <img src={`https://robohash.org/${id}?200x200`} alt="robots"/>
        <Fragment>
          <h2>{name}</h2>
          <p>{email}</p>
        </Fragment>
      </div>
    )
  }


export default Card