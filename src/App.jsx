const ItemComida = (props) => {
    return <li>{props.fru}</li>;
};

const MiBoton = ({texto}) => {
    const handleclickbutton = (title) => {
        console.log('funcion de click' + title);
    }
    return <button onClick={() =>  handleclickbutton('asdfsadf')} >{texto}</button>
};

const WelcomeUser = ({user}) => (user ? <h3>Online</h3> : <h3>OFFline</h3>)


const App = () => {
    const titulo = 'wena choro';
    const comida = ["🍕", "🍔", "🍟", "🌭"];
    const user = false;
    const boton = 'boton react';
    
    return (
        <>
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