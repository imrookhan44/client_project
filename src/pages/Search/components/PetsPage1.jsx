import React, { useState } from 'react'
import "./petsPage1.css"
import { useSelector, useDispatch } from 'react-redux';
import { setPetsPage1 } from '../../../redux/actions/searchCategory-actions';
const PetsPage1 = () => {
    const dispatch = useDispatch();
    const [selected, setSelected] = useState()
    function selectOption(param) {
        const component = document.getElementsByClassName("petsPage1")[0];
        component.style.display = "none";
        const component2 = document.getElementsByClassName("petsPage2")[0];
        if (component2) {
            component2.style.display = "flex";
        }
        dispatch(setPetsPage1(param))
        setSelected(param)
    }
    return (
        <div className='petsPage1'>
            <h1>אני מוכר/ת</h1>
            <div className="petsPage1-div">
                <div className="petsPage1-wrapper">
                    <div onClick={() => selectOption("fish")} className={(selected == "fish") ? "pets selected" : "pets"}>
                        <img src={require(`../../../images/petsType1.png`)} alt="" />
                        <p>דגים</p>
                    </div>
                </div>
                <div className="petsPage1-wrapper">
                    <div onClick={() => selectOption("cats")} className={(selected == "cats") ? "pets selected" : "pets"}>
                        <img src={require(`../../../images/petsType3.png`)} alt="" />
                        <p>חתולים</p>
                    </div>
                </div>
                <div className="petsPage1-wrapper">
                    <div onClick={() => selectOption("dogs")} className={(selected == "dogs") ? "pets selected" : "pets"}>
                        <img src={require(`../../../images/petsType2.png`)} alt="" />
                        <p>כלבים</p>
                    </div>
                </div>
                <div className="petsPage1-wrapper">
                    <div onClick={() => selectOption("reptiles")} className={(selected == "reptiles") ? "pets selected" : "pets"}>
                        <p>זוחלים</p>
                    </div>
                </div>
                <div onClick={() => selectOption("farmAnimals")} className="petsPage1-wrapper">
                    <div onClick={() => selectOption("farmAnimals")} className={(selected == "farmAnimals") ? "pets selected" : "pets"}>

                        <p>חיות משק</p>
                    </div>
                </div>
                <div onClick={() => selectOption("horses")} className="petsPage1-wrapper">
                    <div onClick={() => selectOption("horses")} className={(selected == "horses") ? "pets selected" : "pets"}>
                        <p>סוסים</p>
                    </div>
                </div>
                <div onClick={() => selectOption("rodents")} className="petsPage1-wrapper">
                    <div onClick={() => selectOption("rodents")} className={(selected == "rodents") ? "pets selected" : "pets"}>
                        <p>מכרסמים</p>
                    </div>
                </div>
                <div onClick={() => selectOption("parrots")} className="petsPage1-wrapper">
                    <div onClick={() => selectOption("parrots")} className={(selected == "parrots") ? "pets selected" : "pets"}>
                        <p>תוכים</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PetsPage1