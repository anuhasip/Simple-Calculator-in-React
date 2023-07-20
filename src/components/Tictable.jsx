import { useState } from "react";
import "./Tictable.css";

function Ticsquare({Click, value}){
    return(
        <button onClick={Click} > { value } </button>
    );
}

function TicTable() {

    const [tictactoe, setTictactoe] = useState(Array(9).fill(null));

    const [ticval, setTicval] = useState("X");

    const handleTicTac = (index) => {
        if(handleTicTacWinner(tictactoe) == true)
        {
            return 
        }
        if (tictactoe[index] != null){
            return
        }
        tictactoe[index] = ticval;
        setTictactoe(tictactoe);

        
        setTicval(ticval == "X" ? "O" : "X");
    };

    const handleTicTacWinner = (squares) => {
        const winnigpositions = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]

        for(let i = 0; i < winnigpositions.length; i++){
            const [a, b, c] = winnigpositions[i];
            if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
                return true;
            } 
        }
        return false;
    };

    const updatedTicsquare = (i) => {
        return <Ticsquare className="ticbutton" Click={() => handleTicTac(i)} value={tictactoe[i]} />
    };

    return ( 
        <>
            {ticval}
            <div>
                { updatedTicsquare(0) }
                { updatedTicsquare(1) }
                { updatedTicsquare(2) }
            </div>
            <div>
                { updatedTicsquare(3) }
                { updatedTicsquare(4) }
                { updatedTicsquare(5) }
            </div>
            <div>
                { updatedTicsquare(6) }
                { updatedTicsquare(7) }
                { updatedTicsquare(8) }
            </div>
        </>
     );
}

export default TicTable;