import React, { useEffect } from 'react'
import "./petsPage2.css"
import { selectDropdown9 } from "../../../components/select"
import { useSelector, useDispatch } from 'react-redux';
import { setPetsPage2 } from '../../../redux/actions/searchCategory-actions';
const PetsPage2 = () => {
    const dispatch = useDispatch();
    function selectOption(param) {
        const component = document.getElementsByClassName("petsPage2")[0];
        component.style.display = "none";
        const component2 = document.getElementsByClassName("petsPage3")[0];
        if (component2) {
            component2.style.display = "flex";
        }
        dispatch(setPetsPage2(param))
    }
    function goBack() {
        const component = document.getElementsByClassName("petsPage2")[0];
        component.style.display = "none";
        const component2 = document.getElementsByClassName("petsPage1")[0];
        component2.style.display = "flex";
    }
    useEffect(() => {
        selectDropdown9()
    }, [])
    return (
        <div className='petsPage2'>
            <h1>פרטי מודעה והכלב/ה </h1>
            <div className="petsPage2-div">
                <div className="petsPage2-div-inner">
                    <div className="petsPage2-div-col">
                        <label htmlFor="">:  סוג הכלב/ה    </label>
                        <div className="custom-select9" style={{ width: "300px" }}>
                            <select >
                                <option value="0">רועה גרמני</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </div>
                    <div className="petsPage2-div-col">
                        <label htmlFor="">:  סוג מודעה   </label>
                        <div className="custom-select9" style={{ width: "300px" }}>
                            <select >
                                <option value="0">מכירה</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="petsPage2-div-inner">
                    <div className="petsPage2-div-col">
                        <label htmlFor="">:  מין    </label>
                        <div className="custom-select9" style={{ width: "300px" }}>
                            <select >
                                <option value="0">זכר</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </div>
                    <div className="petsPage2-div-col">
                        <label htmlFor="">: גיל    </label>
                        <div className="custom-select9" style={{ width: "300px" }}>
                            <select >
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="petsPage2-div-inner">
                    <div className="petsPage2-div-col">
                        <label htmlFor="">: רחוב </label>
                        <div className="custom-select9" style={{ width: "300px" }}>
                            <select >
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </div>
                    <div className="petsPage2-div-col">
                        <label htmlFor="">: יישוב    </label>
                        <div className="custom-select9" style={{ width: "300px" }}>
                            <select >
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="petsPage2-div-col">
                    <div className="petsPage2-div-col">
                        <label htmlFor="">: מחיר     </label>
                        <input type="text" />
                    </div>
                </div>
                <div className="petsPage2-div-inner3">
                    <div className="petsPage2-div-inner3-wrapper">
                        <div>מאולפ/ת</div>
                    </div>
                    <div className="petsPage2-div-inner3-wrapper">
                        <div>לא משיר שיער</div>
                    </div>
                    <div className="petsPage2-div-inner3-wrapper">
                        <div>מתאים לדירה</div>
                    </div>
                    <div className="petsPage2-div-inner3-wrapper">
                        <div>מעוקר/ת</div>
                    </div>
                    <div className="petsPage2-div-inner3-wrapper">
                        <div>ידידותי לילדים</div>
                    </div>
                    <div className="petsPage2-div-inner3-wrapper">
                        <div>מתאים למובגרים</div>
                    </div>
                    <div className="petsPage2-div-inner3-wrapper">
                        <div>מתאים לבית עם חצר</div>
                    </div>
                    <div className="petsPage2-div-inner3-wrapper">
                        <div>היפואלרגני</div>
                    </div>
                </div>
                <div className="petsPage2-div-col2">
                    <label htmlFor="">פרטים נוספים</label>
                    <textarea row="5" placeholder='...פרטים נוספים ' />
                </div>
                <div className="realstate-btn">
                    <button onClick={() => selectOption("petsPage3")}>המשך</button>
                    <button onClick={() => goBack()}>חזור</button>
                </div>
            </div>
        </div>
    )
}

export default PetsPage2