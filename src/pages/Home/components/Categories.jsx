import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./categories.css"
import categories from "./categories.json"
import Category from './Category'

const Categories = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(categories)

    }, [data])

    return (
        <div className='categories'>
            {categories.map((items, idx) => <Link to={items.title}><Category title={items.category} img={items.img} /></Link>)}
        </div>
    )
}

export default Categories