import { useEffect, useState } from "react";
import { useSnakeContext } from "../snakeContext/SnakeContext";
import "./Snake.css";

const Snake = () => {

    //* carga de contexto!!!!
    const { snakeConfigurations } = useSnakeContext();


    //* carga de estilos
    var rootElement = document.documentElement; //Cargo hoja de estilos
    rootElement.style.setProperty("--snake-size", snakeConfigurations["snake-value"] + "px");  //la seteo


    //* Estados
    //const [currentDirection, setCurrentDirection] = useState("down");
    //const [moving, setMoving] = useState(false);

    const [intervalId, setIntervalId] = useState(0);
    const [timerId, setTimerId] = useState(0);

    //cambiar la siguiente linea para la posicion inisial
    //const [sizeSnake, setSizeSnake] = useState([[140, 40, "red"], [160, 40, "blue"], [180, 40, "red"], [180, 40, "red"]]); //!Cambiar variables quemadas


    //*Estado unico
    const [snakeState, setSnakeState] = useState({
        currentDirection: "down",
        moving: false,
        intervalId: 0,
        sizeSnake: [[140, 40, "red"], [160, 40, "blue"], [180, 40, "red"], [180, 40, "red"]]
    });


    /*
        useEffect(() => {
    
                //moveTimer();
                moveSnakeLoop();
            //setMoving(false);
        }, []);
        */

    /*
        useEffect(() => {
            //setMoving(false);
            //if (moving) {
               // moveSnake();
                //moveTimer();
            //}
            //setMoving(false);
            console.log("he cambiado de direccion: " + currentDirection);
            //setCurrentDirection(currentDirection);
            if (moving) {
                console.log("tendira que moverme a: " + currentDirection);
                moveTimer(); //* Se mueve despues de un segundo!
                //moveSnakeLoop();
                //moveDalay();
            }
            setMoving(false);
    
    
        }, [currentDirection]);
    */
    //!Este es el que funciona
    /*
        useEffect(() => {
    //debugger;
            if (moving) {
                console.log("tendira que moverme a: " + currentDirection);
                moveTimer(); //* Se mueve despues de un segundo!
                //moveSnakeLoop();
                //moveDalay();
            }
            setMoving(false);
        }, [sizeSnake]);
        
    
    */
    //el de intervalo
    /*
        function moveSnakeLoop() {
            if (intervalId) {
                clearInterval(intervalId);
                setIntervalId(0);
                return;
            }
    
            const newIntervalId = setInterval(() => {
                console.log("moviendo...");
    
                moveSnake();
    
            }, 1000);
            setIntervalId(newIntervalId);
        }
    */
    /*
    async function moveDalay() {
        
            //await delay(2000);
            setMoving(true);
            moveSnake();
            
    }
*/


    //!tambien se usa
    /*
        function moveTimer() {
            //console.log("moviendo...2");
            
            //moveSnake();
            setTimeout(() => {
                //alert(currentDirection);
    
                
                setMoving(true);
                console.log("esta es la direccion definitiva despues del timer: " + currentDirection);
            moveSnake();
                //setMoving(true);
                //moveTimer()
                //setMoving(false);
    
                debugger;
                
            }, 1000);
            //setMoving(false);
            //snakeConfigurations["difficulty"]
        }*/

    /*
        function moveSnake2() {
    
            setSizeSnake(sizeSnake.filter((element, index) => index != 0));
    
    
            switch (currentDirection) {
                case "up":
                    setSizeSnake(...sizeSnake, ([(sizeSnake[sizeSnake.length - 1][0] - snakeConfigurations["snake-value"]), sizeSnake[sizeSnake.length - 1][1], snakeConfigurations["color-snake"]]));
                    break;
                case "down":
                    setSizeSnake(...sizeSnake, ([(sizeSnake[sizeSnake.length - 1][0] + snakeConfigurations["snake-value"]), sizeSnake[sizeSnake.length - 1][1], snakeConfigurations["color-snake"]]));
                    break;
    
                case "right":
                    setSizeSnake(...sizeSnake, ([sizeSnake[sizeSnake.length - 1][0], (sizeSnake[sizeSnake.length - 1][1] + snakeConfigurations["snake-value"]), snakeConfigurations["color-snake"]]));
                    break;
                case "left":
                    setSizeSnake(...sizeSnake, ([sizeSnake[sizeSnake.length - 1][0], (sizeSnake[sizeSnake.length - 1][1] - snakeConfigurations["snake-value"]), snakeConfigurations["color-snake"]]));
                    break;
    
                default:
                    break;
            }
        }
    */






    //*******
    
    useEffect(() => {
        //debugger;

        
        
                if (snakeState.moving) {
                    //moveTimer(); //* Se mueve despues de un segundo!
                    //moveSnakeLoop();
                    moveSnakeTimer();
                }
                //setSnakeState({...snakeState,  moving: false });
            }, [snakeState]);
    
    function moveTimer() {
        setTimeout(() => {
            //setSnakeState({...snakeState,  moving: true });
            moveSnake();
        }, 200);
    }

    function moveSnakeTimer() {
        /*
        if (timerId) {
            clearTimeout(timerId);
            setTimerId(0);
            return;
        }
        */

        const newTimerId = setTimeout(() => {
            moveSnake();
        }, 200);
        setTimerId(newTimerId);
    }

    function moveSnakeLoop() {
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(0);
            return;
        }

        const newIntervalId = setInterval(() => {
            moveSnake();
        }, 1000);
        setIntervalId(newIntervalId);
    }




    function moveSnake() {


        
        

        let moved;
        //moved = sizeSnake.filter((element, index) => index != 0);
        moved = snakeState.sizeSnake.filter((element, index) => index != 0);


        //switch (currentDirection) {
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


        //setSizeSnake(moved);
        setSnakeState({...snakeState,  sizeSnake: moved });
        moved = [];

    }

    /*
    function eatFruit() {
        //let newSize = (); 
        //setSizeSnake([...sizeSnake, ]);
        setSizeSnake(sizeSnake.filter((element, index) => index != 0));
    }*/

    //function
    const handleKeyDown = event => {

        switch (event.key) {
            case 'ArrowLeft':
                changeDirection("left");
                break;
            case 'ArrowUp':
                changeDirection("up");
                break;
            case 'ArrowRight':
                //moved.push([moved[moved.length - 1][0], (moved[moved.length - 1][1] + snakeConfigurations["snake-value"]), snakeConfigurations["color-snake"]]);
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
            //return;
        }

        //setMoving(false);
        //console.log(currentDirection);
        switch (direction) {
            case "up":
            case "down":
                if (snakeState.currentDirection == "right" || snakeState.currentDirection == "left") {
                    //setCurrentDirection(direction);
                    setSnakeState({...snakeState,  currentDirection: direction });
                }
                break;

            case "right":
            case "left":
                if (snakeState.currentDirection == "up" || snakeState.currentDirection == "down") {
                    //setCurrentDirection(direction);
                    setSnakeState({...snakeState,  currentDirection: direction });
                }
                break;

            default:
                break;
        }
        //console.log(currentDirection);
    }


    function startPause() {
        moveSnake();
        //setMoving(!moving);
        console.log("sdf22", snakeState);
        setSnakeState({...snakeState,  moving: !snakeState.moving });
        //moveSnakeLoop();
        console.log("sdf22", snakeState);

    }


    /*

    {snakeState.sizeSnake.map((part, i) => (

                <div className="snake" style={{ top: part[0], left: part[1], "background-color": part[2] }} key={i}></div>


            ))}

            <button onClick={startPause}>Start / Pause</button>

            <button onClick={moveSnake}>Force</button>

            

            <button onClick={() => (changeDirection("down"))}>down</button>

            <button onClick={() => (changeDirection("left"))}>left</button>
            <button onClick={() => (changeDirection("right"))}>right</button>
            <button onClick={() => (changeDirection("up"))}>up</button>

    */
    //<button onClick={moveSnake}>down</button>
    //<button onClick={moveSnake}>Force</button>
    return (
        <div onKeyDown={handleKeyDown}>
{console.log("RENDER!!")}
{console.log("CULEBRA",snakeState)}
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