
import React, { useState } from "react";
import "./App.css"

function TextBox(props) {
    const [valueIsValid, setValueIsValid] = useState(true)

    const handleAnyInputsChange = (e) => {
        const name = e.target.name;
        const value = e.target.value
        console.log(name, value)
        props.handleAnyInputsChange(name, value);
        if(value === ""){
            setValueIsValid(false);
        }
        else{
            setValueIsValid(true);
        }
    };
    const inputsCheckButtonPressed = props.inputsCheckButtonPressed;
    const inputValues = props.inputValues;



    return (
        <div className='textBox'>

            <div className='textBoxInner'>
                <label className="titleText">{props.label}</label>
                <div className=''>
                    <input className={`standardText ${inputsCheckButtonPressed &&  valueIsValid === false ? "textInputError": "" }`}
                        
                        type='text'
                        name={props.varID}
                        value={props.value}
                        onChange={handleAnyInputsChange}
                    >

                    </input>
                </div>
            </div>
        </div>
    )

}

export default TextBox