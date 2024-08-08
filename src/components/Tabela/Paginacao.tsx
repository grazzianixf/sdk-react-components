import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

const VALORES_TAMANHO_PAGINA = [10, 15, 20, 25, 30, 40, 50, 100];

const obterNumerosPaginacao = (qtdRegistros: number, tamanhoPagina: number, paginaAtual: any) => {
    // console.log('qtdRegistros', qtdRegistros)
    // console.log('tamanhoPagina', tamanhoPagina)
    let qtdPaginas;

    if (qtdRegistros < tamanhoPagina) {
        qtdPaginas = 1;
    } else {
        qtdPaginas = Math.round(qtdRegistros / tamanhoPagina);
        qtdPaginas += qtdRegistros % tamanhoPagina > 0 ? 1 : 0;
        qtdPaginas = qtdPaginas < 1 ? 1 : qtdPaginas;
    }

    let indiceRegistroInicial;
    let indiceRegistroFinal;

    if (paginaAtual) {
        indiceRegistroInicial = (paginaAtual - 1) * tamanhoPagina + 1;
        indiceRegistroFinal = paginaAtual == qtdPaginas ? qtdRegistros : paginaAtual * tamanhoPagina;
    } else {
        paginaAtual = 1;
        indiceRegistroInicial = 1;
        indiceRegistroFinal = tamanhoPagina > qtdRegistros ? qtdRegistros : tamanhoPagina;
    }

    indiceRegistroFinal = indiceRegistroFinal > qtdRegistros ? qtdRegistros : indiceRegistroFinal;

    let resultado = {
        qtdPaginas,
        paginaAtual,
        indiceRegistroInicial,
        indiceRegistroFinal
    }

    // console.log('resultado', resultado)

    return resultado;
}

export interface BotaoAvancarRetrocederPaginaProps {
    onClick(): any;
    paginaAtual: number;
    qtdPaginas?: number
}

const BotaoRetrocederPagina = (props: BotaoAvancarRetrocederPaginaProps) => {
    const { onClick, paginaAtual } = props
    let disabled = false;

    if (paginaAtual == 1) {
        disabled = true;
    }

    return <button {...{ disabled, onClick }}>{"<<"}</button>
}

const BotaoAvancarPagina = (props: BotaoAvancarRetrocederPaginaProps) => {
    const { onClick, paginaAtual, qtdPaginas } = props;

    let disabled = false;

    if (qtdPaginas && paginaAtual >= qtdPaginas) {
        disabled = true;
    }

    return <button {...{ disabled, onClick }}>{">>"}</button>
}

export interface PaginacaoProps {
    quantidadeRegistros: number;
    quantidadeColunas: number;
    tamanhoPagina: number;
    atualizarIntervaloRegistros(indiceRegistroInicial: number, indiceRegistroFinal: number): any;
}

const Paginacao = (props: PaginacaoProps) => {

    const { quantidadeRegistros, quantidadeColunas, tamanhoPagina, atualizarIntervaloRegistros } = props;

    const [qtdPaginas, setQtdPaginas] = useState(0);
    const [paginaAtual, setPaginaAtual] = useState(0);
    const [intervaloRegistros, setIntervaloRegistros] = useState({ indiceRegistroInicial: 0, indiceRegistroFinal: 0 });

    useEffect(() => {
        // console.log('tamanhoPagina', tamanhoPagina)
        let { qtdPaginas, paginaAtual } = obterNumerosPaginacao(quantidadeRegistros, tamanhoPagina, null);

        setQtdPaginas(qtdPaginas);
        setPaginaAtual(paginaAtual);

        return () => undefined
    }, [quantidadeRegistros, tamanhoPagina])

    useEffect(() => {

        if (paginaAtual) {
            // console.log('paginaAtual', paginaAtual)
            let { indiceRegistroInicial, indiceRegistroFinal } = obterNumerosPaginacao(quantidadeRegistros, tamanhoPagina, paginaAtual);
            setIntervaloRegistros({ indiceRegistroInicial, indiceRegistroFinal })
        }

        return () => undefined
    }, [paginaAtual])

    useEffect(() => {

        if (intervaloRegistros?.indiceRegistroInicial && intervaloRegistros?.indiceRegistroFinal
            && atualizarIntervaloRegistros && typeof atualizarIntervaloRegistros === 'function') {

            atualizarIntervaloRegistros(intervaloRegistros?.indiceRegistroInicial, intervaloRegistros?.indiceRegistroFinal)
        }

        return () => undefined
    }, [intervaloRegistros])

    return (
        <tr>
            <td colSpan={quantidadeColunas}>
                <table className="tabelaRodapePaginacao">
                    <tr>
                        <td>
                            <span>
                                Exibir: {tamanhoPagina}
                            </span>
                            <span>
                                {intervaloRegistros?.indiceRegistroInicial}-{intervaloRegistros?.indiceRegistroFinal} de {quantidadeRegistros}
                            </span>
                            <span>
                                Página {paginaAtual} de {qtdPaginas} página(s)
                                &nbsp;
                                <BotaoRetrocederPagina
                                    paginaAtual={paginaAtual || 0}
                                    qtdPaginas={qtdPaginas}
                                    onClick={() => setPaginaAtual(paginaAtual - 1)}
                                />
                                &nbsp;
                                <BotaoAvancarPagina
                                    paginaAtual={paginaAtual}
                                    qtdPaginas={qtdPaginas}                                
                                    onClick={() => setPaginaAtual(paginaAtual + 1)}
                                />
                            </span>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    )
}

Paginacao.propTypes = {
    quantidadeRegistros: PropTypes.number.isRequired,
    quantidadeColunas: PropTypes.number.isRequired,
    tamanhoPagina: PropTypes.number,
    atualizarIntervaloRegistros: PropTypes.func.isRequired
}

Paginacao.defaultProps = {
    quantidadeRegistros: 0,
    tamanhoPagina: 10
}

export default Paginacao;