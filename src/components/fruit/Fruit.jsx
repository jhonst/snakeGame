import "./Fruit.css"
import { useSnakeContext } from "../snakeContext/SnakeContext";
import { useEffect, useState } from "react";

const Fruit = ( { currentSnake, currentFruit, childFunc, addScore  } ) => {

    //* carga de contexto!!!!
    const { snakeConfigurations } = useSnakeContext();


    //* carga de estilos
    var rootElement = document.documentElement; //Cargo hoja de estilos
    rootElement.style.setProperty("--fruit-size", snakeConfigurations["snake-value"] + "px");  //la seteo

    const [ fruitState, setFruitState ] = useState({
        maxvalue: (snakeConfigurations["board-size"] - snakeConfigurations["snake-value"]),
        minvalue: 0,
        maxfactor: (snakeConfigurations["board-size"] / snakeConfigurations["snake-value"]),
    });

    const [ positionFruit, setPositionFruit ] = useState([20,20,"red"]);
    //const [ eaten, setEaten ] = useState(false);

    useEffect(()=>{
        if(currentSnake){
            let headSnake = currentSnake[currentSnake.length - 1];
            if(headSnake[0] === positionFruit[0] && headSnake[1] === positionFruit[1]){
                addScore(1);
                changePosition();
            }
        }
        
    }, [currentSnake]);

    useEffect(()=>{
        currentFruit(positionFruit);
    }, [positionFruit]);
    

      

    function getRandomPosition(){
        return (Math.floor(Math.random() * (fruitState.maxfactor - 0) + 0)) * snakeConfigurations["snake-value"];
    }

    function changePosition(){

        console.log(currentSnake);
        let posLeft = getRandomPosition();
        let posTop = getRandomPosition();

        let validPosition = false;

        if(posTop === positionFruit[0] && posLeft === positionFruit[1]){
            validPosition=false;
        }else{
            currentSnake.every(element => {
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
    //<button onClick={changePosition}>hola</button>
    return(
        <>
            <div className="fruit" style={{ top: positionFruit[0], left: positionFruit[1] }}/>
            
        </>
        
    );

}

export { Fruit };