import React, { useEffect } from 'react'
import "./realstatePage2.css"
import { useSelector, useDispatch } from 'react-redux';
import { setRealstatePage2 } from '../../../redux/actions/searchCategory-actions';
const RealstatePage2 = () => {
    const dispatch = useDispatch();
    const realstatePage2 = useSelector((state) => state.realstatePage2Reducers.realstatePage2);
    function selectOption(param) {
        const component = document.getElementsByClassName("realstatePage2")[0];
        component.style.display = "none";
        const component2 = document.getElementsByClassName("realstatePage3")[0];
        if (component2) {
            component2.style.display = "flex";
        }
        console.log(param)
        dispatch(setRealstatePage2(param))
    }

    return (
        <div className='realstatePage2'>
            <h1>? איזה סוג מודעה תרצו לפרסם   </h1>
            <div className="realstatePage2-div">
                <div onClick={() => selectOption("partners")} className={(realstatePage2 == "partners") ? "partners selected" : "partners"}>
                    <h3>שותפים</h3>
                </div>
                <div onClick={() => selectOption("commercial")} className={(realstatePage2 == "commercial") ? "commercial selected" : "commercial"}>
                    <h3>מסחרי</h3>
                </div>
                <div onClick={() => selectOption("renting")} className={(realstatePage2 == "renting") ? "renting selected" : "renting"}>
                    <h3>השכרה</h3>
                </div>
                <div onClick={() => selectOption("sale")} className={(realstatePage2 == "sale") ? "sale selected" : "sale"}>
                    <h3>מכירה</h3>
                </div>
            </div>
        </div>
    )
}

export default RealstatePage2