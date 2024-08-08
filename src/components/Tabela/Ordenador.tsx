import React from "react";
import { useEffect, useState } from "react";

const ComponenteOrdemAsc = () => <>&darr;</>

const ComponenteOrdemDesc = () => <>&uarr;</>

export interface OrdenadorProps {
    label: string;
    nomeColuna: string;
    dados: any[];
    atualizarTabela?(dados: any[]): any;
    campoOrdenacao: any
}

const Ordenador = (props: OrdenadorProps) => {
    const { label, nomeColuna, dados, atualizarTabela, campoOrdenacao } = props;

    const [ehAsc, setEhAsc] = useState(false);
    const [ehDesc, setEhDesc] = useState(false);

    const deveOrdenar = !campoOrdenacao || nomeColuna == campoOrdenacao

    const handleAscDesc = () => {
        if (!ehAsc && !ehDesc) {
            setEhAsc(true);
        } else {
            setEhAsc(!ehAsc);
            setEhDesc(!ehDesc);
        }
    }

    useEffect(() => {
        if (dados && nomeColuna && (ehAsc || ehDesc) && atualizarTabela && typeof atualizarTabela === 'function') {
            atualizarTabela(ordenarArrayObjetos(dados, nomeColuna, ehDesc));
        }

        return undefined;
    }, [ehAsc, ehDesc])


    return <a className='linkSemEstilo' onClick={handleAscDesc}>
        {label}
        {deveOrdenar && ehAsc && (<>&nbsp;<ComponenteOrdemAsc /></>)}
        {deveOrdenar && ehDesc && (<>&nbsp;<ComponenteOrdemDesc /></>)}
    </a>
}

export default Ordenador;

const ordenarArrayObjetos = (arrayObjetos: any[], nomeCampo: string, ehDecrescente: boolean) => {
    const clone = [...arrayObjetos];
    const inversorOrdem = ehDecrescente ? -1 : 1;

    clone.sort((objA, objB) => {
        //ignorando maiusculas e minusculas
        let conteudoA = objA[nomeCampo];
        let conteudoB = objB[nomeCampo];
        if (typeof conteudoA === 'string' && typeof conteudoB === 'string') {
            conteudoA = conteudoA?.toUpperCase();
            conteudoB = conteudoB?.toUpperCase();
        }
        //

        if (conteudoA < conteudoB) {
            return -1 * inversorOrdem;
        }

        if (conteudoA > conteudoB) {
            return 1 * inversorOrdem;
        }

        return 0;
    });

    return clone;
}