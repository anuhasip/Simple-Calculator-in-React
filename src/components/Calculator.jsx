import { useState } from "react";

function Display({displayText, displayAnswer}) {
    return ( 
        <div className="display">
            {displayText}
            <br />
            <span className="answer-area">{displayAnswer}</span>
        </div>
     );
}


function Calculator() {

    const [displayText, setDisplayText] = useState("");
    const [displayAnswer, setDisplayAnswer] = useState("0");

    const handleClickNumber = (num) => {
        setDisplayText((prevValue) => prevValue + num)
    }

    const ButtonNum = (n) => {
        return <button className="cal-btn" onClick={ () => handleClickNumber(n) }> { n } </button>
    }

    return ( 
        <div className="calculator">
            <Display displayText={displayText} displayAnswer={displayAnswer} />
            { ButtonNum("AC") }
            { ButtonNum("C") }
            { ButtonNum("%") }
            { ButtonNum("/") }
            <br/>
            { ButtonNum("7") }
            { ButtonNum("8") }
            { ButtonNum("9") }
            { ButtonNum("*") }
            <br/>
            { ButtonNum("4") }
            { ButtonNum("5") }
            { ButtonNum("6") }
            { ButtonNum("-") }
            <br/>
            { ButtonNum("1") }
            { ButtonNum("2") }
            { ButtonNum("3") }
            { ButtonNum("+") }
            <br/>
            { ButtonNum("+-") }
            { ButtonNum("0") }
            { ButtonNum(".") }
            { ButtonNum("=") }
            <br/>
        </div>
     );
}

export default Calculator
