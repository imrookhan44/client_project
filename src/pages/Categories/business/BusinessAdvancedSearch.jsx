import React, { useEffect } from 'react'
import "./businessAdvancedSearch.css"
import { selectDropdown } from '../components/select'
import { useState } from 'react'
const BusinessAdvancedSearch = () => {
    const [isAdvanceClicked, setIsAdvanceClicked] = useState(false)
    useEffect(() => {
        selectDropdown()
    }, [])
    function advanceSearchToggle() {
        setIsAdvanceClicked(!isAdvanceClicked);
    }
    return (
        <div className='businessAdvancedSearch'>
            <h1> מה תרצו לרכוש ? </h1>
            <div className="businessAdvancedSearch-div-inner">
                <div className="businessAdvancedSearch-div-col">
                    <label htmlFor="">: אזור </label>
                    <div className="custom-select" style={{ width: "200px" }}>
                        <select >
                            <option value="0">בחר אזור</option>
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
                <div className="businessAdvancedSearch-div-col">
                    <label htmlFor="">תת קטגוריה :  </label>
                    <div className="custom-select" style={{ width: "200px" }}>
                        <select >
                            <option value="0">: 9 באוגוסט</option>
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
                <div className="businessAdvancedSearch-div-col">
                    <label htmlFor="">: קטגוריה </label>
                    <div className="custom-select" style={{ width: "200px" }}>
                        <select >
                            <option value="0">: 9 באוגוסט</option>
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
            <div className="businessAdvancedSearch-div-inner2">
                <button onClick={advanceSearchToggle}>חיפוש מתקדם</button>
                <button>חפש</button>
            </div>
        </div>
    )
}

export default BusinessAdvancedSearch