import MiBoton from "./assets/components/Button";
import WelcomeUser from "./assets/components/Welcome";
import ItemComida from "./assets/components/Comida";
import ButtonState from "./assets/components/ButtonState";


const App = () => {
    const titulo = 'wena choro';
    const comida = ["🍕", "🍔", "🍟", "🌭"];
    const user = false;
    const boton = 'boton react';
    
    return (
        <>
            <ButtonState/>
            <h1 className="text-center">{titulo}</h1>
            <h1 className="text-center">{user}</h1>
            <WelcomeUser user={user} />
            <ul>
                {
                    comida.map((fru, index) => (
                        <ItemComida key={index} fru={fru}/>
                    ))
                }
            </ul>
            <MiBoton texto={boton} />
        </>
    )    
}



export default App