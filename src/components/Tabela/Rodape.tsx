import React from "react";

export interface RodapeProps {
    quantidadeRegistros: number;
    children: number;
}

const Rodape = (props: RodapeProps) => {
    const { quantidadeRegistros, children } = props;

    return (
        <tr>
            <td colSpan={quantidadeRegistros}>
                {quantidadeRegistros} registro(s).
            </td>
            {children}
        </tr>
    )
}

export default Rodape