import "./Fruit.css"
import { useSnakeContext } from "../snakeContext/SnakeContext";
import { useState } from "react";

const Fruit = ( { currentSnake } ) => {

    //* carga de contexto!!!!
    const { snakeConfigurations } = useSnakeContext();


    //* carga de estilos
    var rootElement = document.documentElement; //Cargo hoja de estilos
    rootElement.style.setProperty("--fruit-size", snakeConfigurations["snake-value"] + "px");  //la seteo

    //Pixel minimo 0px
    //patron 20px
    //Pixel maximo 380px - 95%

    const [ fruitState, setFruitState ] = useState({
        maxvalue: (snakeConfigurations["board-size"] - snakeConfigurations["snake-value"]),
        minvalue: 0,
        //maxfactor: (snakeConfigurations["board-size"] / snakeConfigurations["snake-value"]),
        maxfactor: 2,
    });

    const [ positionFruit, setPositionFruit ] = useState([20,20,"red"]);

    function getRandomPosition(){

        //All factors
        /*
        let allFactors = [];
        for (let index = 0; index < fruitState.maxfactor; index++) {
            allFactors.push(index);
        }
        console.log(allFactors);
        */
/*
        let validXPositions = [];
        let posX = fruitState.minvalue;
        for (let index = 0; index < fruitState.maxfactor; index++) {
            validXPositions.push(posX);
            posX = posX + snakeConfigurations["snake-value"];
        }
        console.log(validXPositions);

*/

        
        return (Math.floor(Math.random() * (fruitState.maxfactor - 0) + 0)) * snakeConfigurations["snake-value"];
    }

    function changePosition(){

        //let newCoords = [getRandomPosition(),getRandomPosition(),"blue"];
        let posLeft = getRandomPosition();
        let posTop = getRandomPosition();

        let validPosition = false;

        if(posTop === positionFruit[0] && posLeft === positionFruit[1]){
            validPosition=false;
        }else{
            currentSnake.every(element => {
                //console.log("iterando...");
                if(element[0] === posTop && element[1] === posLeft){
                    
                    validPosition=false;
                }else{
                    validPosition=true;
                }
                return validPosition;
            });
        }
        

        if(validPosition){
            setPositionFruit([posTop,posLeft,"blue"]);
        }else{
            changePosition();
        }


        
    }
    
    return(
        <>
            <p>Esta es la pos de la serpiente: {currentSnake}</p>
            <div className="fruit" style={{ top: positionFruit[0], left: positionFruit[1] }}/>
            <button onClick={changePosition}>hola</button>
        </>
        
    );

}

export { Fruit };