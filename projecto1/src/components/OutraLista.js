function OutraLista({itens}){

    return (

        <>
        
        <h3>Lista de coisas boas</h3>
        {itens.lenght >0 ?(
            itens.map((item,index) => (

                <p key={index}>{item}</p>
            ))) :(

                <p>Nao ha Itens na Lista</p>

            )}
        
        </>
    )

}

export default OutraLista