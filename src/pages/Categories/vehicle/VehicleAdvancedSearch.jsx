import React, { useEffect, useState } from 'react'
import "./vehicleAdvancedSearch.css"
import { selectDropdown } from '../components/select'
const VehicleAdvancedSearch = () => {
    const [isAdvanceClicked, setIsAdvanceClicked] = useState(false)
    useEffect(() => {
        selectDropdown()
    }, [])
    function advanceSearchToggle() {
        setIsAdvanceClicked(!isAdvanceClicked);
    }
    return (
        <div className='vehicleAdvancedSearch'>
            <h1>פרטי הרכב שאתם מחפשים</h1>
            <div className="vehicleAdvancedSearch-div-inner">
                <div className="vehicleAdvancedSearch-div-col">
                    <label htmlFor="">: אזור  </label>
                    <div className="custom-select" style={{ width: "200px" }}>
                        <select >
                            <option value="0">: בחר אזור</option>
                            <option value="1">Audi</option>
                            <option value="2">BMW</option>
                            <option value="3">Citroen</option>
                            <option value="6">Jaguar</option>
                            <option value="7">Land Rover</option>
                            <option value="8">Mercedes</option>
                            <option value="9">Mini</option>
                        </select>
                    </div>
                </div>
                <div className="vehicleAdvancedSearch-div-col">
                    <label htmlFor="">: דגם    </label>
                    <div className="custom-select" style={{ width: "200px" }}>
                        <select >
                            <option value="0">: בחר דגם</option>
                            <option value="1">Audi</option>
                            <option value="2">BMW</option>
                            <option value="3">Citroen</option>
                            <option value="6">Jaguar</option>
                            <option value="7">Land Rover</option>
                            <option value="8">Mercedes</option>
                            <option value="9">Mini</option>
                        </select>
                    </div>
                </div>
                <div className="vehicleAdvancedSearch-div-col">
                    <label htmlFor="">: יצרן    </label>
                    <div className="custom-select" style={{ width: "200px" }}>
                        <select >
                            <option value="0">: בחר יצרן</option>
                            <option value="1">Audi</option>
                            <option value="2">BMW</option>
                            <option value="3">Citroen</option>
                            <option value="6">Jaguar</option>
                            <option value="7">Land Rover</option>
                            <option value="8">Mercedes</option>
                            <option value="9">Mini</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="vehicleAdvancedSearch-div-inner">
                <div className="vehicleAdvancedSearch-div-col">
                    <label htmlFor="">: שנה  </label>
                    <div className="vehicleAdvancedSearch-col2">
                        <input type="text" placeholder='עד - ' />
                        <input type="text" placeholder='מ - ' />
                    </div>
                </div>
                <div className="vehicleAdvancedSearch-div-col">
                    <label htmlFor="">: טווח מחיר </label>
                    <div className="vehicleAdvancedSearch-col2">
                        <input type="text" placeholder='עד - ' />
                        <input type="text" placeholder='מ - ' />
                    </div>
                </div>
            </div>
            <div className={`${isAdvanceClicked ? "vehicleAdvancedSearch-advance" : "invisible"}`}>
                <div className="vehicleAdvancedSearch-advance-div">
                    <div className="vehicleAdvancedSearch-advance-div-div1">
                        <label htmlFor="">טווח קילומטר :</label>
                        <div>
                            <input type="text" placeholder='מ - '/>
                            <input type="text" placeholder=' עד -'/>
                        </div>
                    </div>
                    <div className="vehicleAdvancedSearch-advance-div-div2">
                        <label htmlFor="">מספר ידיים :</label>
                        <div>
                            <input type="text" placeholder='מ - '/>
                            <input type="text" placeholder=' עד -'/>
                        </div>
                    </div>
                    <div className="vehicleAdvancedSearch-advance-div-div3">
                        <label htmlFor="">בעלות נוכחית :</label>
                        <div className="custom-select" style={{ width: "220px" }}>
                            <select >
                                <option value="0"> בחר יצרן</option>
                                <option value="1">Audi</option>
                                <option value="2">BMW</option>
                                <option value="3">Citroen</option>
                                <option value="6">Jaguar</option>
                                <option value="7">Land Rover</option>
                                <option value="8">Mercedes</option>
                                <option value="9">Mini</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="vehicleAdvancedSearch-advance-div">
                    <div className="vehicleAdvancedSearch-advance2-div-div1">
                        <label htmlFor="">מספר מקומות   :</label>
                        <div className="custom-select" style={{ width: "220px" }}>
                            <select >
                                <option value="0"> 5 </option>
                                <option value="1">Audi</option>
                                <option value="2">BMW</option>
                                <option value="3">Citroen</option>
                                <option value="6">Jaguar</option>
                                <option value="7">Land Rover</option>
                                <option value="8">Mercedes</option>
                                <option value="9">Mini</option>
                            </select>
                        </div>
                    </div>
                    <div className="vehicleAdvancedSearch-advance2-div-div2">
                        <label htmlFor=""> נפח מנוע :</label>
                        <div className='div-advance'>
                            <div className="custom-select" style={{ width: "220px" }}>
                                <select >
                                    <option value="0">  מ -</option>
                                    <option value="1">Audi</option>
                                    <option value="2">BMW</option>
                                    <option value="3">Citroen</option>
                                    <option value="6">Jaguar</option>
                                    <option value="7">Land Rover</option>
                                    <option value="8">Mercedes</option>
                                    <option value="9">Mini</option>
                                </select>
                            </div>
                            <div className="custom-select" style={{ width: "220px" }}>
                                <select >
                                    <option value="0">  עד -</option>
                                    <option value="1">Audi</option>
                                    <option value="2">BMW</option>
                                    <option value="3">Citroen</option>
                                    <option value="6">Jaguar</option>
                                    <option value="7">Land Rover</option>
                                    <option value="8">Mercedes</option>
                                    <option value="9">Mini</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="vehicleAdvancedSearch-advance2-div-div3">
                        <label htmlFor=""> סוג מנוע :</label>
                        <div className="custom-select" style={{ width: "220px" }}>
                            <select >
                                <option value="0">  בנזין</option>
                                <option value="1">Audi</option>
                                <option value="2">BMW</option>
                                <option value="3">Citroen</option>
                                <option value="6">Jaguar</option>
                                <option value="7">Land Rover</option>
                                <option value="8">Mercedes</option>
                                <option value="9">Mini</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="vehicleAdvancedSearch-advance-div">
                    <div className="vehicleAdvancedSearch-advance3-div-div1">
                        <label htmlFor="">צבע:</label>
                        <div className="custom-select" style={{ width: "220px" }}>
                            <select >
                                <option value="0"> בחר יצרן</option>
                                <option value="1">Audi</option>
                                <option value="2">BMW</option>
                                <option value="3">Citroen</option>
                                <option value="6">Jaguar</option>
                                <option value="7">Land Rover</option>
                                <option value="8">Mercedes</option>
                                <option value="9">Mini</option>
                            </select>
                        </div>
                    </div>
                    <div className="vehicleAdvancedSearch-advance3-div-div2">
                        <label htmlFor="">תיבת הילוכים:</label>
                        <div className="custom-select" style={{ width: "220px" }}>
                            <select >
                                <option value="0"> בחר יצרן</option>
                                <option value="1">Audi</option>
                                <option value="2">BMW</option>
                                <option value="3">Citroen</option>
                                <option value="6">Jaguar</option>
                                <option value="7">Land Rover</option>
                                <option value="8">Mercedes</option>
                                <option value="9">Mini</option>
                            </select>
                        </div>
                    </div>
                    <div className="vehicleAdvancedSearch-advance3-div-div3">
                        <div>
                            <label htmlFor="">מותאם לנכים</label>
                            <input type="checkbox" name="" id="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="vehicleAdvancedSearch-div-inner2">
                <button onClick={advanceSearchToggle}>חיפוש מתקדם</button>
                <button>חפש</button>
            </div>
        </div>
    )
}

export default VehicleAdvancedSearch