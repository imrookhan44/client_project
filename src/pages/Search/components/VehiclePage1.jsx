import React, { useEffect, useState } from 'react'
import "./vehiclePage1.css"
import { useSelector, useDispatch } from 'react-redux';
import { setVehiclePage1 } from '../../../redux/actions/searchCategory-actions';
const VehiclePage1 = () => {
    useEffect(() => {
        return () => {
            console.log("unmount")
        }
    }, [])
    const [selected, setSelected] = useState()
    const dispatch = useDispatch();
    function selectVehicleCat(params) {
        const component = document.getElementsByClassName("vehicleCategory")[0];
        component.style.display = "none";
        const component2 = document.getElementsByClassName("vehiclePage2")[0];
        if (component2) {
            component2.style.display = "flex";
        }
        dispatch(setVehiclePage1("vehiclePage2"))
        setSelected(params)

    }
    return (
        <div className='vehicleCategory'>
            <h1>אני מוכר/ת</h1>
            <div className="vehicleCategory-div">
                <div className="vehicleCategory-wrapper">
                    <div onClick={() => selectVehicleCat(1)} className={(selected == "1") ? "vehcat selected" : "vehcat"}>
                        <img src={require(`../../../images/carType3.png`)} alt="" />
                        <p>משאיות</p>
                    </div>
                </div>
                <div className="vehicleCategory-wrapper">
                    <div onClick={() => selectVehicleCat(2)} className={(selected == "2") ? "vehcat selected" : "vehcat"}>
                        <img src={require(`../../../images/carType2.png`)} alt="" />
                        <p>ג’יפים</p>
                    </div>
                </div>
                <div className="vehicleCategory-wrapper">
                    <div onClick={() => selectVehicleCat(3)} className={(selected == "3") ? "vehcat selected" : "vehcat"}>
                        <img src={require(`../../../images/carType1.png`)} alt="" />

                        <p>פרטי</p>
                    </div>
                </div>
                <div className="vehicleCategory-wrapper-wrapper">
                    <div className="vehicleCategory-wrapper">
                        <div onClick={() => selectVehicleCat(4)} className={(selected == "4") ? "vehcat selected" : "vehcat"}>
                            <p>אופנועים</p>
                        </div>
                    </div>
                    <div className="vehicleCategory-wrapper">
                        <div onClick={() => selectVehicleCat(5)} className={(selected == "5") ? "vehcat selected" : "vehcat"}>
                            <p>קטנועים</p>
                        </div>
                    </div>
                    <div className="vehicleCategory-wrapper">
                        <div onClick={() => selectVehicleCat(6)} className={(selected == "6") ? "vehcat selected" : "vehcat"}>
                            <p>מסחרי</p>
                        </div>
                    </div>
                    <div className="vehicleCategory-wrapper">
                        <div onClick={() => selectVehicleCat(5)} className={(selected == "8") ? "vehcat selected" : "vehcat"}>
                            <p>כלי שייט</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default VehiclePage1