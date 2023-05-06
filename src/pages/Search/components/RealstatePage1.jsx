import React from 'react'
import "./realstatePage1.css"
import { useSelector, useDispatch } from 'react-redux';
import { setRealstatePage1 } from '../../../redux/actions/searchCategory-actions';
const RealstatePage1 = () => {
    const dispatch = useDispatch();
    const realstatePage1 = useSelector((state) => state.realstatePage1Reducers.realstatePage1);
    function selectOption(param) {
        const component = document.getElementsByClassName("realstatePage1")[0];
        component.style.display = "none";
        dispatch(setRealstatePage1(param))
    }

    return (
        <div className='realstatePage1'>
            <h1>? איזה סוג מודעה תרצו לפרסם </h1>
            <div className="realstatePage1-div">
                <div onClick={() => selectOption("mediator")} className={(realstatePage1 == "mediator") ? " selected mediator" : "mediator"}>
                    <h3>מתווך</h3>
                </div>
                <div onClick={() => selectOption("private")} className={(realstatePage1 == "private") ? " selected private" : "private"}>
                    <h3>פרטי</h3>
                </div>
            </div>
        </div>
    )
}

export default RealstatePage1