import { useState, useRef } from "react";
import { Fruit } from "../fruit/Fruit";
import { Snake } from "../snake/Snake";
import "./Board.css";

const Board = () => {

    const [ bodySnake, setBodySnake ] = useState();
    const [ fruitPos, setFruitPos ] = useState();

    const [ score, setScore ] = useState(0);


    function scoreAdd1(point){
        setScore(score + point);
    }

    return(

        <div className="board-game">
            <p>tu score: {score}</p>
            <Snake newSnake={setBodySnake} getScore={score}/>
            <Fruit currentSnake={bodySnake} currentFruit={setFruitPos} addScore={scoreAdd1}/>
        </div>
    );
}

export { Board };