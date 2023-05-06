import React, { useEffect, useState } from 'react'
import "./secondhandAdvancedSearch.css"
import { selectDropdown } from '../components/select'
const SecondhandAdvancedSearch = () => {
    const [isAdvanceClicked, setIsAdvanceClicked] = useState(false)
    useEffect(() => {
        selectDropdown()
    }, [])
    function advanceSearchToggle() {
        setIsAdvanceClicked(!isAdvanceClicked);
    }
    return (
        <div className='secondhandAdvancedSearch'>
            <h1>  ? מה תרצו לרכוש  </h1>
            <div className="secondhandAdvancedSearch-div-inner">  
            <div className="secondhandAdvancedSearch-div-col">
                    <label htmlFor="">: חיפוש  </label>
                    <input type="text" placeholder='אני מחפש/ת ...' style={{ width: "200px" }} ></input>
                </div>
                 <div className="secondhandAdvancedSearch-div-col">
                    <label htmlFor="">:אזור</label>
                    <div className="custom-select" style={{ width: "200px" }}>
                        <select >
                            <option value="0">: בחר תת קטגוריה</option>
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
              
                <div className="secondhandAdvancedSearch-div-col">
                    <label htmlFor="">: תת קטגוריה    </label>
                    <div className="custom-select" style={{ width: "200px" }}>
                        <select >
                            <option value="0">: בחר תת קטגוריה</option>
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
                <div className="secondhandAdvancedSearch-div-col">
                    <label htmlFor="">: קטגוריה    </label>
                    <div className="custom-select" style={{ width: "200px" }}>
                        <select >
                            <option value="0">: בחר קטגוריה</option>
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

            <div className={`${isAdvanceClicked ? "secondhandAdvancedSearch-advance" : "invisible"}`}>

                <h1>מצב מוצר:</h1>
                <div className="secondhandAdvancedSearch-advance-div">
                    <div>
                        <label htmlFor="">דרוש תיקון</label>
                        <input type="checkbox" name="" id="" />
                    </div>
                    <div>
                        <label htmlFor="">משומש</label>
                        <input type="checkbox" name="" id="" />
                    </div>
                    <div>
                        <label htmlFor="">כמו חדש</label>
                        <input type="checkbox" name="" id="" />
                    </div>
                    <div>
                        <label htmlFor="">חדש</label>
                        <input type="checkbox" name="" id="" />
                    </div>
                </div>
            </div>
            <div className="secondhandAdvancedSearch-div-inner2">
                <button onClick={advanceSearchToggle}>חיפוש מתקדם</button>
                <button>חפש</button>
            </div>

        </div>
    )
}

export default SecondhandAdvancedSearch