import Button from "./evento/Button"

function Evento(){

    function meuEvento() {
        console.log("Activando o primeiro evento!")
    }

    function segundoEvento(){
        console.log("Activando o segundo Evento!")

    }

    return(
        <div>
            <p>Clique para disparar um evento:</p>
            <Button event={meuEvento} text ="Primeiro Evento"/>
            <Button event={segundoEvento} text ="Segundo Evento"/>
        </div>
    )
}

export default Evento