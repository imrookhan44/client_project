import React, { useEffect, useState } from 'react'
import "./cards.css"
import cards from "./cards.json"
import { useSelector, useDispatch } from 'react-redux';
import { setViewItem } from '../../../redux/actions/viewItem-actions';
import { useNavigate } from 'react-router-dom';
import Card from './Card';

const Cards = (props) => {

    const [data, setData] = useState([]);
    const [featureColumn, setFeatureColumns] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 18;
    useEffect(() => {
        setData(cards.categories[props.itemId].cards)
        setFeatureColumns(cards.categories[props.itemId].featuresColumn)
    }, []);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = data.slice(startIndex, endIndex);
    return (
        <div className='cards'>
            <div className="cards-btn">
                <div>
                    <button>סינון תוצאות</button>
                    <button>מיין לפי</button>
                </div>
                <h3> {props.h1}</h3>
            </div>
            <div className="cards-div">
                {currentData.map((item, index) => (

                    <>
                        <Card
                            image={item.image}
                            heading={item.heading}
                            title1={item.title1}
                            title2={item.title2}
                            featureColumns={featureColumn}
                            text1={item.text1}
                            text2={item.text2}
                            buttonText={item.buttonText}
                            productId={item.productId}
                        />

                    </>
                ))}

            </div>
            <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={data.length}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    )
}
const Pagination = ({ itemsPerPage, totalItems, currentPage, setCurrentPage }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    return (
        <div className='pagination'>
            {currentPage > 1 && (
                <button onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
            )}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    disabled={page === currentPage}
                >
                    {page}
                </button>
            ))}
            {currentPage < totalPages && (
                <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
            )}
        </div>
    );
};

export default Cards