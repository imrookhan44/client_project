import React from 'react'
import "./category.css"
const Category = (props) => {
    return (
        <div className="category">
            <img src={require(`../../../images/${props.img}`)} alt="" />
            <p>{props.title}</p>
        </div>
    )
}

export default Category