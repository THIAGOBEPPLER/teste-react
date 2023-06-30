import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function TesteJogo(){

    let id = 1;
    let placar = "6X2/6X4";
    let dupla1 = "PessoaX/PessoaY";
    let dupla2 = "PessoaZ/PessoaA";
    let categoria = "4ª Masculina";
    let fase = "Grupos";
    let grupo = "GrupoA"

    return(
        <Card style={{ width: '20rem' }}>
            <Card.Body>
                <p> Jogo {id}  </p> 
                <p> {dupla1} {placar} {dupla2} </p>
                <p> {categoria} </p>
                <p> {fase} {grupo} </p>
            </Card.Body>

        </Card>
    );

}

function quebraLinha(){

    let nome = "PessoaX/PessoaY"

    let nomesSparados = nome.split("/");

    nomesSparados.

    return(

    )
}

export default TesteJogo
