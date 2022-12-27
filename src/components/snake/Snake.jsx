import { useEffect, useState } from "react";
import { useSnakeContext } from "../snakeContext/SnakeContext";
import "./Snake.css";

const Snake = ( { newSnake } ) => {

    //* carga de contexto!!!!
    const { snakeConfigurations } = useSnakeContext();


    //* carga de estilos
    var rootElement = document.documentElement; //Cargo hoja de estilos
    rootElement.style.setProperty("--snake-size", snakeConfigurations["snake-value"] + "px");  //la seteo

    const [intervalId, setIntervalId] = useState(0);
    const [timerId, setTimerId] = useState(0);

    //*Estado unico
    const [snakeState, setSnakeState] = useState({
        currentDirection: "down",
        moving: false,
        intervalId: 0,
        sizeSnake: [[0, 0, "red"], [20, 0, "blue"], [40, 0, "red"], [60, 0, "red"]]
    });

    //*******
    useEffect(() => {
        newSnake( snakeState.sizeSnake );
        if (snakeState.moving) {
            moveSnakeTimer();
        }
    }, [snakeState]);

    function moveSnakeTimer() {
        const newTimerId = setTimeout(() => {
            moveSnake();
        }, 200);
        setTimerId(newTimerId);
    }

    function moveSnake() {

        let moved;
        moved = snakeState.sizeSnake.filter((element, index) => index !== 0);

        switch (snakeState.currentDirection) {
            case "up":
                moved.push([(moved[moved.length - 1][0] - snakeConfigurations["snake-value"]), moved[moved.length - 1][1], snakeConfigurations["color-snake"]]);

                break;
            case "down":
                moved.push([(moved[moved.length - 1][0] + snakeConfigurations["snake-value"]), moved[moved.length - 1][1], snakeConfigurations["color-snake"]]);
                break;

            case "right":
                moved.push([moved[moved.length - 1][0], (moved[moved.length - 1][1] + snakeConfigurations["snake-value"]), snakeConfigurations["color-snake"]]);
                break;
            case "left":
                moved.push([moved[moved.length - 1][0], (moved[moved.length - 1][1] - snakeConfigurations["snake-value"]), snakeConfigurations["color-snake"]]);
                break;

            default:
                break;
        }

        setSnakeState({ ...snakeState, sizeSnake: moved });
        //newSnake({ ...snakeState, sizeSnake: moved });
        moved = [];

    }

    const handleKeyDown = event => {

        switch (event.key) {
            case 'ArrowLeft':
                changeDirection("left");
                break;
            case 'ArrowUp':
                changeDirection("up");
                break;
            case 'ArrowRight':
                changeDirection("right");
                break;
            case 'ArrowDown':
                changeDirection("down");
                break;

            default:
                break;
        }
    };

    function changeDirection(direction) {


        if (timerId) {
            clearTimeout(timerId);
            setTimerId(0);
        }

        switch (direction) {
            case "up":
            case "down":
                if (snakeState.currentDirection === "right" || snakeState.currentDirection === "left") {
                    //setCurrentDirection(direction);
                    setSnakeState({ ...snakeState, currentDirection: direction });
                }
                break;

            case "right":
            case "left":
                if (snakeState.currentDirection === "up" || snakeState.currentDirection === "down") {
                    //setCurrentDirection(direction);
                    setSnakeState({ ...snakeState, currentDirection: direction });
                }
                break;

            default:
                break;
        }
    }

    function startPause() {
        moveSnake();
        //setMoving(!moving);
        console.log("sdf22", snakeState);
        setSnakeState({ ...snakeState, moving: !snakeState.moving });
        //moveSnakeLoop();
        console.log("sdf22", snakeState);

    }

    return (
        <div onKeyDown={handleKeyDown}>
            {console.log("RENDER!!")}
            {console.log("CULEBRA", snakeState)}
            {console.log("sEGUNDO RENDER!!")}

            {/*<p>sz: {JSON.stringify(snakeState, null, 2)}</p>*/}


            {snakeState.sizeSnake.map((part) => (

                <div className="snake" style={{ top: part[0], left: part[1], "background-color": part[2] }}></div>


            ))}

            <button onClick={startPause}>Start / Pause</button>





            <button onClick={() => (changeDirection("down"))}>down</button>

            <button onClick={() => (changeDirection("left"))}>left</button>
            <button onClick={() => (changeDirection("right"))}>right</button>
            <button onClick={() => (changeDirection("up"))}>up</button>

        </div>



    );
}

export { Snake }; 