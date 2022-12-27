import { useState } from "react";
import { Fruit } from "../fruit/Fruit";
import { Snake } from "../snake/Snake";
import "./Board.css";

const Board = () => {

    const [ bodySnake, setBodySnake ] = useState();

    return(

        <div className="board-game">
            <Snake newSnake={setBodySnake}/>
            <Fruit currentSnake={bodySnake}/>
        </div>
    );
}

export { Board };