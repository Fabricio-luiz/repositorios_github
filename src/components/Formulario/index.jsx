import { useState, useEffect } from "react"

const Formulario = (props) => {
    const [materiaA, setmateriaA] = useState(0);
    const [materiaB, setmateriaB] = useState(0);
    const [materiaC, setmateriaC] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(() => {
        console.log("O componente iniciou");

        return() => {
            console.log("O componente finalizou");
        }
    }, [props.nome]);
    
    useEffect(() => {
        console.log("O estado nome mudou");
    }, [nome]);

    useEffect(() => {
        console.log("O estado materia A mudou para: " + materiaA);
    }, [materiaA, materiaB, materiaB]);
    

    const alteraNome = (evento) => {
        // console.log(evento.target.value);
        // setNome(evento.target.valeu);
        setNome(estadoAnterior => {

            return evento.target.value;
        })
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;


        if (media >= 7) {
            return (
                <p> Olá {nome}, você foi APROVADO </p>
            )
        } else {
            return (
                <p> Olá {nome}, você foi REPROVADO </p>
            )
        };
    }

    return (
        <form>
            <ul>
                {[1,2,3,4,5].map(item => (
                    <li key={item} >{item}</li>
                ))}
            </ul>

            <input type="text" placeholder="Seu nome" onChange={alteraNome}/>
            <input type="number" placeholder="Nota matéria A" onChange={({ target }) => setmateriaA(parseInt(target.value))}/>
            <input type="number" placeholder="Nota matéria B" onChange={evento => setmateriaB(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota matéria C" onChange={evento => setmateriaC(parseInt(evento.target.value))}/>
            {renderizaResultado()}
        </form>
    )
}

export default Formulario