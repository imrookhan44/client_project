import React from "react";
import "./card.css"
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setViewItem } from '../../../redux/actions/viewItem-actions';
import { FaMapMarkerAlt } from "react-icons/fa";

const Card = ({ image, heading, title1, title2, featureColumns, buttonText, text1, text2, productId }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const itemId = useSelector((state) => state.viewItemReducers);
    function handleClick(param) {
        dispatch(setViewItem(param))
        navigate("/viewItem")

    }
    return (
        <div onClick={() => handleClick(productId)} className="card">
            <img src={require(`../../../images/${image}.png`)} alt="" />
            <h2 className="heading">{heading}</h2>
            <div className="titles">
                <span>{title1}</span>
                <span>
                    <FaMapMarkerAlt /> {title2}
                </span>
            </div>
            <div className="features">
                {featureColumns.map((column, i) => (
                    <div key={i} className="column">
                        {column.map((item, j) => (
                            <div key={j} className="row">
                                {item.icon ?
                                    <img src={require(`../../../images/${item.icon}.svg`)} alt="" />
                                    : null}
                                <div>
                                    <p className="answer">{item.text1}</p>
                                    <p className="question">{item.text2}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <p className="text">{text1}</p>
            <div className="button-row">
                <div className="texts">
                    <span className="alignRight">{text2[0]}</span>
                    <span>{text2[1]}</span>
                </div>
                <button>{buttonText}</button>
            </div>
        </div>
    );
};

export default Card;
