import React, { useEffect, useState } from 'react'
import "./realstateAdvancedSearch.css"
import { selectDropdown } from '../components/select'
const RealstateAdvancedSearch = () => {
    const [isAdvanceClicked, setIsAdvanceClicked] = useState
        (false)
    useEffect(() => {
        selectDropdown()
    }, [])
    function advanceSearchToggle() {
        setIsAdvanceClicked(!isAdvanceClicked);
    }

    return (
        <div className='realstateAdvancedSearch'>
            <h1>פרטי הנכס שאתם מחפשים</h1>
            <div className="realstateAdvancedSearch-div-inner">
                  <div className="realstateAdvancedSearch-div-inner">
                <div className="realstateAdvancedSearch-div-col">
                    <label htmlFor="">: טווח מחיר    </label>
                    <div className="realstateAdvancedSearch-col2">
                        <input type="text" placeholder='עד - ' />
                        <input type="text" placeholder='מ - ' />
                    </div>
                </div>
            </div>
                <div className="realstateAdvancedSearch-div-col">
                    <label htmlFor="">: סוג הנכס    </label>
                    <div className="custom-select" style={{ width: "200px" }}>
                        <select >
                            <option value="0"> דירות </option>
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
                <div className="realstateAdvancedSearch-div-col">
                    <label htmlFor=""> : אזור / עיר  </label>
                    <div className="custom-select" style={{ width: "200px" }}>
                        <select >
                            <option value="0">פתח תקווה</option>
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
            <div className={`${isAdvanceClicked ? "realstateAdvancedSearch-advance" : "invisible"}`}>
                <h1>מאפייני הדירה</h1>
                <div className="realstateAdvancedSearch-advance-div ">
                    <div>
                        <label htmlFor="">גישה לנכים</label>
                        <input type="checkbox" name="" id="" />
                    </div>
                    <div>
                        <label htmlFor="">חניה</label>
                        <input type="checkbox" name="" id="" />
                    </div>
                    <div>
                        <label htmlFor="">מעלית</label>
                        <input type="checkbox" name="" id="" />
                    </div>
                    <div>
                        <label htmlFor="">מזגן</label>
                        <input type="checkbox" name="" id="" />
                    </div>
                    <div>
                        <label htmlFor="">ממ"ד</label>
                        <input type="checkbox" name="" id="" />
                    </div>
                    <div>
                        <label htmlFor="">מרוהטת</label>
                        <input type="checkbox" name="" id="" />
                    </div>
                    <div>
                        <label htmlFor="">סורגים</label>
                        <input type="checkbox" name="" id="" />
                    </div>
                    <div>
                        <label htmlFor="">מרפסת</label>
                        <input type="checkbox" name="" id="" />
                    </div>
                    <div>
                        <label htmlFor="">מחסן</label>
                        <input type="checkbox" name="" id="" />
                    </div>
                    <div>
                        <label htmlFor="">משופצת</label>
                        <input type="checkbox" name="" id="" />
                    </div>
                </div>
                <div className="realstateAdvancedSearch-advance-div">
                    <div className="realstateAdvancedSearch-advance-div-div1">
                        <label htmlFor="">קומה:</label>
                        <div className='div-advance'>
                            <input type="text" placeholder='מ - '/>
                            <input type="text" placeholder=' עד -' />
                        </div>
                    </div>
                    <div className="realstateAdvancedSearch-advance-div-div2">
                        <label htmlFor="">גודל הדירה במ”ר:</label>
                        <div className='div-advance'>
                            <input type="text" />   
                        </div>
                    </div>
                    <div className="realstateAdvancedSearch-advance-div-div3">
                        <label htmlFor="">תאריך כניסה:</label>
                        <input type="date" name="" id="" />
                    </div>
                </div>
            </div>

            <div className="realstateAdvancedSearch-div-inner2">
                <button onClick={advanceSearchToggle}>חיפוש מתקדם</button>
                <button>חפש</button>
            </div>
        </div>
    )
}

export default RealstateAdvancedSearch