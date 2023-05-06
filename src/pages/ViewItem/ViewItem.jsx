import React, { useRef, useEffect, useState } from "react";
import "./viewItem.css"
import { BsFacebook } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';
import { BsLink } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { TiTick } from 'react-icons/ti';
import ReactDOM from "react-dom";
import { ImCross } from 'react-icons/im';
import { useSelector, useDispatch } from 'react-redux';
import Data from "./viewItemData.json"
import { Link } from 'react-router-dom';
import Footer from "../../components/Footer"
const Modal = ({ handleClose, show, children }) => {
    const modalRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                handleClose();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [modalRef, handleClose]);

    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <div className="modal-main" ref={modalRef}>
                {children}
                <button className="btn" onClick={handleClose}><ImCross /></button>
            </div>
        </div>
    );
};

const ViewItem = () => {
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState([]);
    const [item, setItem] = useState([]);
    const [features, setFeatures] = useState([]);
    const [features1, setFeatures1] = useState([]);
    const [details, setDetails] = useState();
    const [images, setImages] = useState();
    const [morefeatures, setMorefeatures] = useState();
    const itemId = useSelector((state) => state.viewItemReducers.itemId);

    const handleGoBack = () => {
        window.history.back();
    };
    useEffect(() => {
        setData(Data);
        data.map((items, idx) => {
            if (items.itemId == itemId) {
                setItem(items)
                setFeatures(items.features)
                setFeatures1(items.features1)
                setImages(items.images)

                if (items.more_details) {
                    setDetails(items.more_details)
                }
                if (items.more_features) {
                    setMorefeatures(items.more_features)
                }

            }
        });
    }, [data]);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
    return (
        <div className='viewItem'>
            <div className="viewItem-Main">
                <div className="viewItem-ImgArea">
                    <div className="viewItem-save">
                        <img src={require(`../../images/greyHeart.png`)} alt="" />
                        <p>שמירת מודעה</p>
                    </div>
                    {
                        images ? <img id="mainImg" src={require(`../../images/${images}.png`)} alt="" /> : null
                    }

                    <div className="viewItem-smallImg">
                        {
                            images ? <img src={require(`../../images/${images}.png`)} alt="" /> : null
                        }
                        {
                            images ? <img src={require(`../../images/${images}.png`)} alt="" /> : null
                        }
                        {
                            images ? <img src={require(`../../images/${images}.png`)} alt="" /> : null
                        }

                    </div>
                </div>
                <div className="viewItem-ContentArea">
                    <div className="viewItem-ContentArea-share">
                        <div>
                            <BsFacebook />
                            <IoLogoWhatsapp />
                            <BsLink />
                            <GrMail />
                        </div>

                        <AiOutlineArrowRight onClick={handleGoBack} />
                    </div>
                    <div className="viewItem-ContentArea-details">
                        <h2>   {item.name} :</h2>
                        <p> {item.description} </p>
                    </div>
                    <div className="viewItem-ContentArea-features1">
                        {
                            features1.map((items, idx) =>
                                <div>
                                    {
                                        items.icon ? <img src={require(`../../images/${items.icon}.svg`)} alt="" /> : null
                                    }
                                    <h2 className="answer">{items.text1}</h2>
                                    <p className="question">{items.text2}</p>
                                </div>
                            )
                        }
                    </div>
                    <div className="viewItem-ContentArea-features">
                        {

                            features.map((items, idx) =>
                                <div>
                                    <h2 className="answer">{items.title}</h2>
                                    <p className="question">{items.feature}</p>
                                </div>
                            )
                        }
                    </div>
                    <div className="viewItem-ContentArea-location">
                        <img src={require(`../../images/Iconlocation.png`)} alt="" />
                        <img src={require(`../../images/Icongooglemaps.png`)} alt="" />
                        <div>
                            <h3>אזור</h3>
                            <p>{item.location}</p>
                        </div>
                    </div>
                    <div className="viewItem-ContentArea-price">
                        <h3> מחיר :</h3>
                        <p>{item.price}</p>
                    </div>
                    <div onClick={handleShowModal} className="viewItem-ContentArea-contact">
                        <h2>הצג יצירת קשר</h2>
                    </div>
                    {
                        item.Category == "secondHand" ? <Link to="/shipping" className="viewItem-ContentArea-delivery">
                            <h2> הזמן משלוח</h2>
                        </Link> : null
                    }

                    <Modal show={showModal} handleClose={handleCloseModal}>
                        <div className="modal-header">
                            <h1>Logo</h1>
                        </div>
                        <div className="modal-content">
                            <h2>😊 צור קשר </h2>
                            <div className="modal-inner">
                                <h3>מספר פלאפון: 053-5311471</h3>
                                <h3>שם איש קשר: עידן בן אליהו</h3>
                            </div>
                            <button>לדבר בצ’אט אונליין</button>
                        </div>
                    </Modal>
                    <div className="viewItem-ContentArea-report">
                        <h2>יש טעות במודעה ? דווח מספר מודעה : 545645   </h2>
                    </div>
                </div>
            </div>
            {
                details ? <div className="viewItem-moreDeatails">
                    {
                        console.log(details)
                    }
                    <h2>פרטים נוספים:</h2>
                    <div className="viewItem-moreDetails-div">

                        <div className="viewItem-moreDetails-div-content">
                            {

                                details.map((items, idx) =>


                                    <p>{items}</p>

                                )
                            }
                        </div>
                        <img src={require(`../../images/carDetails.png`)} alt="" />
                    </div>
                </div>
                    : null
            }
            {
                morefeatures ? <div className="viewItem-moreFeatures">
                    <h2>כלול בנכס:</h2>
                    <div className="viewItem-moreFeatures-div">
                        {
                            morefeatures.map((items, idx) =>
                                <div className={items.available ? "tick" : "cross"}>
                                    {items.available ?
                                        <TiTick />
                                        : <ImCross />}
                                    <p>{items.name}</p>
                                </div>
                            )
                        }


                    </div>
                </div>
                    : null
            }

            <img className='viewItem-Img' src={require(`../../images/CarBanner.png`)} alt="" />

        </div>
    )
}

export default ViewItem
