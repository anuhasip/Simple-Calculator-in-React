import { useState } from "react";

function Display({displayText}) {
    return ( 
        <div className="display">
            <span>{displayText}</span>
        </div>
     );
}


function Calculator() {

    const [displayText, setDisplayText] = useState("");

    const handleClickButton = (op) => {
        if(displayText == "Invalid" || displayText == "Infinity"){
            setDisplayText("");
        }
        
        switch(op){
            case "0":case "1": case "2": case "3": case "4": case "5": case "6": case "7": case "8": case "9":
                setDisplayText((prevValue) => prevValue + op);
                return ;
            case "=":
                if(displayText.length == 0) return ;
                try{
                    let answer = eval(displayText);
                    if(String(answer).length > 15) answer = String(answer).substring(0, 16);
                    setDisplayText(String(answer));
                }
                catch{
                    setDisplayText("Invalid");
                }
                return ;
            case "+": case "-": case "*": case "/": case ".":
                if("+-*/.".includes(displayText[displayText.length - 1])) return ;
                if(displayText.length == 0) return ;
                setDisplayText((prevValue) => prevValue + op);
                return ;               
        }
    }

    const allClear = () => {
        setDisplayText("")
    }

    const lastClear = () => {
        if(displayText == "Invalid" || displayText == "Infinity"){
            setDisplayText("");
        }
        setDisplayText(prevValue => prevValue.substring(0, prevValue.length - 1));
        
    }

    const ButtonNum = (n) => {
        return <button className="cal-btn" onClick={ () => handleClickButton(n) }> { n } </button>
    }

    return ( 
        <div className="calculator">
            <Display displayText={displayText} />
            <button className="cal-btn cal-ac-btn" onClick={ allClear }>AC</button>
            <button className="cal-btn cal-c-btn" onClick={ lastClear }>C</button>
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
            { ButtonNum("0") }
            { ButtonNum(".") }
            <button className="cal-btn cal-equal-btn" onClick={ () => handleClickButton("=") }>=</button>
            <br/>
        </div>
     );
}

export default Calculator
