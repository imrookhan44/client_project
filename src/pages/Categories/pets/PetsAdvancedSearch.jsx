import React, { useEffect } from 'react'
import "./petsAdvancedSearch.css"
import { selectDropdown } from '../components/select'
import { useState } from 'react'
const PetsAdvancedSearch = () => {
    const [isAdvanceClicked, setIsAdvanceClicked] = useState(false)
    useEffect(() => {
        selectDropdown()
    }, [])
    function advanceSearchToggle() {
        setIsAdvanceClicked(!isAdvanceClicked);
    }
    return (
        <div className='petsAdvancedSearch'>
            <h1>פרטי בעל החיים שאתם מחפשים</h1>
            <div className="petsAdvancedSearch-div-inner">
                <div className="petsAdvancedSearch-div-col">
                    <label htmlFor="">: סוג מודעה  </label>
                    <div className="custom-select" style={{ width: "200px" }}>
                        <select >
                            <option value="0">מכירה</option>
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
                <div className="petsAdvancedSearch-div-col">
                    <label htmlFor="">: בעל חיים  </label>
                    <div className="custom-select" style={{ width: "200px" }}>
                        <select >
                            <option value="0">הכל</option>
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
                <div className="petsAdvancedSearch-div-col">
                    <label htmlFor="">: אזור  </label>
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
            </div>
            <div className="petsAdvancedSearch-div-inner">
                <div className="petsAdvancedSearch-div-col">
                    <label htmlFor="">: מין </label>
                    <div className="petsAdvancedSearch-col2">
                        <input type="text" placeholder='נקבה' />
                        <input type="text" placeholder='זכר' />
                    </div>
                </div>
                <div className="petsAdvancedSearch-div-col">
                    <label htmlFor="">: טווח מחיר </label>
                    <div className="petsAdvancedSearch-col2">
                        <input type="text" placeholder='עד - ' />
                        <input type="text" placeholder='מ - ' />
                    </div>
                </div>
            </div>
            <div className={`${isAdvanceClicked ? "petsAdvancedSearch-advance" : "invisible"}`}>
                <h1>פרטי בעל החיים:</h1>
                <div className="petsAdvancedSearch-advance-div1">

                    <h2>גיל :</h2>
                    <div className="petsAdvancedSearch-advance-div1-div">
                        <div>
                            בוגר - 2-7 שנים
                        </div>
                        <div>  מבוגר - מעל 7 שנים </div>
                        <div>צעיר - עד 9 חודשים עד 24 חודשים</div>
                        <div>גור - עד 9 חודשים</div>
                    </div>

                </div>
                <div className="petsAdvancedSearch-advance-div2">
                    <h2>אפשרויות נוספות :</h2>
                    <div className="petsAdvancedSearch-advance-div2-div">
                        <div>מתאים למבוגרים</div>
                        <div>ידידותי לילדים</div>
                        <div>מאולפ/ת</div>
                        <div>מחוסנ/ת</div>
                        <div>מעוקר/ת</div>
                        <div>לא משיר שיער</div>
                        <div>מתאים לדירה</div>
                        <div>מתאים לבית עם חצר</div>
                        <div>היפואלרגני</div>
                    </div>

                </div>
            </div>
            <div className="petsAdvancedSearch-div-inner2">
                <button onClick={advanceSearchToggle}>חיפוש מתקדם</button>
                <button>חפש</button>
            </div>
        </div>
    )
}

export default PetsAdvancedSearch