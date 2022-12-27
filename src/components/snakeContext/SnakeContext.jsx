import { useState, useContext, createContext } from "react";
//creacion de contexto

//export const contextPass = createContext({ pass: "", setPass: (pass: string) => { } });
export const contextSnake = createContext();

//Costom hook
export const useSnakeContext = () => useContext(contextSnake);

//componente
const SnakeContext = ({children}) => {


    //! Variables de Configuracion!!!!

    const configFile = {
        "color-snake":"black",
        "snake-value":20,
        "difficulty":2000,

        "board-size" : 400
    }

    const [ snakeConfigurations, setSnakeConfigurations ] = useState(configFile);



    return(
        <contextSnake.Provider value={{snakeConfigurations, setSnakeConfigurations}}>
            {children}
        </contextSnake.Provider>
    );
};

export {SnakeContext};