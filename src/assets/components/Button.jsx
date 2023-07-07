const MiBoton = ({texto}) => {
    const handleclickbutton = (title) => {
        console.log('funcion de click' + title);
    }
    return <button onClick={() =>  handleclickbutton('-asdfsadf')} >{texto}</button>
};

export default MiBoton;