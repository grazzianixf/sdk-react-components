import PropTypes from "prop-types";
import { useEffect, useState } from 'react';
import './Tabela.css';
import React from "react";
import Ordenador from "./Ordenador";
import Paginacao from "./Paginacao";
import Rodape from "./Rodape";

/*
    TESTE IMPLEMENTANDO TABELA USANDO HTML->TABLE
 */

/*
    Referencias
    https://arquivo.devmedia.com.br/artigos/devmedia/html-entities.html
*/

const STYLE_CHECKBOX_A_REMOVER = {
    appearance: "auto"
}

const RANGE_EXIBICAO_REGISTROS = {
    indiceInicial: 1,
    indiceFinal: 0
}

export interface TabelaProps {
    titulo: string;
    colunas: any[];
    linhas: any[];
    paginacao?: any;
    onClickLinha(event: any, index: number): any;
    elementoRodape: any;
    selecionavel?: boolean;
    onSelect?(linhas: any[]): any;
}

const Tabela = (props: TabelaProps) => {

    const { titulo, colunas, linhas, paginacao, onClickLinha, elementoRodape, selecionavel, onSelect } = props;

    const [registros, setRegistros] = useState([]);
    const [campoOrdenacao, setCampoOrdenacao] = useState(null);
    const [rangeExibicaoRegistros, setRangeExibicaoRegistros] = useState(RANGE_EXIBICAO_REGISTROS);
    const [linhasSelecionadas, setLinhasSelecionadas] = useState([]);

    useEffect(() => {
        if (linhas) {
            setRegistros(linhas as never[]);
        }
        setRangeExibicaoRegistros({ ...RANGE_EXIBICAO_REGISTROS, indiceFinal: linhas?.length });

        return undefined;
    }, [linhas])

    useEffect(() => {
        if (registros && rangeExibicaoRegistros) {
            setLinhasSelecionadas([]);
        }

        return undefined;
    }, [registros, rangeExibicaoRegistros])

    useEffect(() => {
        if (selecionavel && linhasSelecionadas && onSelect && typeof onSelect === 'function') {
            onSelect(linhasSelecionadas);
        }

        return () => undefined
    }, [linhasSelecionadas])

    const atualizarIntervaloRegistros = (inicial: number, final: number) => setRangeExibicaoRegistros(r => ({ ...r, indiceInicial: inicial, indiceFinal: final }));

    const handleClickLinha = (e: any, indiceRegistro: number) => {
        if (onClickLinha && typeof onClickLinha === 'function') {
            onClickLinha(e, indiceRegistro)
        }
    }

    const handleLinhasSelecionadas = (valor: any) => {
        if (linhasSelecionadas.includes(valor as never)) {
            setLinhasSelecionadas(state => [...state.filter(i => i != valor)])
        } else {
            setLinhasSelecionadas(state => [...state, valor] as never);
        }
    }

    const handleMarcarDesmarcarTodos = _ => {
        if (linhasSelecionadas) {
            if (linhasSelecionadas?.length == registros?.length) {
                setLinhasSelecionadas([]);
            } else {
                let arrayIndicesRangeExibicao = [];

                for (let i = rangeExibicaoRegistros?.indiceInicial; i <= rangeExibicaoRegistros?.indiceFinal; i++) {
                    arrayIndicesRangeExibicao.push(i - 1);
                }

                setLinhasSelecionadas(arrayIndicesRangeExibicao as never[]);
            }
        }
    }

    if (!colunas || !colunas.length || colunas.length == 0) {
        return null;
    }

    return (
        <div className='divExterna'>
            <table className='tabelaSGP'>
                {
                    titulo && (
                        <caption>{titulo}</caption>
                    )
                }
                <thead>
                    <tr>
                        {
                            selecionavel &&
                            (
                                <th>
                                    <input
                                        type="checkbox"
                                        style={STYLE_CHECKBOX_A_REMOVER}
                                        title="Marcar/desmarcar todos"
                                        checked={linhasSelecionadas?.length == (rangeExibicaoRegistros?.indiceFinal - rangeExibicaoRegistros?.indiceInicial + 1)}
                                        onChange={handleMarcarDesmarcarTodos}
                                    />
                                </th>
                            )
                        }
                        {
                            colunas?.map((coluna, indiceColuna) => (
                                <th t key={`col_${indiceColuna}`}>
                                    <Ordenador
                                        label={coluna.label}
                                        nomeColuna={coluna.accessor}
                                        dados={registros}
                                        campoOrdenacao={campoOrdenacao}
                                        atualizarTabela={dados => {
                                            setCampoOrdenacao(coluna.accessor || coluna.label);
                                            setRegistros(dados);
                                        }}
                                    />
                                </th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        registros?.filter((r, indice) => (indice + 1) >= rangeExibicaoRegistros?.indiceInicial && (indice + 1) <= rangeExibicaoRegistros?.indiceFinal)
                            .map((registro, indiceRegistro) => (
                                <tr
                                    key={`row_${indiceRegistro}`}
                                    onClick={handleClickLinha}
                                >
                                    {
                                        selecionavel &&
                                        (
                                            <td key={`cell_mark_${indiceRegistro}`}>
                                                <input
                                                    type="checkbox"
                                                    style={STYLE_CHECKBOX_A_REMOVER}
                                                    value={indiceRegistro}
                                                    key={`cell_check_${indiceRegistro}`}
                                                    title="Marcar/desmarcar registro"
                                                    checked={linhasSelecionadas?.includes(indiceRegistro)}
                                                    onChange={_ => handleLinhasSelecionadas(indiceRegistro)}
                                                />
                                            </td>
                                        )
                                    }
                                    {
                                        colunas?.map((coluna, indiceColuna) => (
                                            <td key={`cell_${indiceRegistro}_${indiceColuna}`}>
                                                {registro[coluna.accessor || coluna.label]}
                                            </td>
                                        ))
                                    }
                                </tr>
                            ))
                    }
                </tbody>
                <tfoot>
                    {
                        paginacao && paginacao?.habilitado
                            ? (
                                <Paginacao
                                    quantidadeColunas={colunas?.length + (selecionavel ? 1 : 0)}
                                    quantidadeRegistros={registros?.length}
                                    habilitado={paginacao?.habilitado}
                                    tamanhoPagina={paginacao.tamanhoPagina}
                                    atualizarIntervaloRegistros={atualizarIntervaloRegistros}
                                />
                            )
                            :
                            <Rodape
                                quantidadeRegistros={registros?.length}
                            >
                                {elementoRodape}
                            </Rodape>
                    }
                </tfoot>
            </table>
        </div>
    )
}

export default Tabela;

//-- Funções auxiliares
