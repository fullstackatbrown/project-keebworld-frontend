import React from 'react'
import "./ProductHeader.css"


const lorem =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, " + 
  "sed iure blanditiis voluptatum nulla quidem minus quam tempora obcaecati " + 
  "necessitatibus inventore!";

export const ProductHeader = (props) => {
  return (
    <div className="productHeader">
        <div className="addHeight"/>
        <h1 className="title">{props.productName}</h1>
        {/* <p>{props.productDescription}</p> */}
        <p className="description">{lorem}</p>
    </div>
  )
}

