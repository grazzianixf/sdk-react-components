import React from "react";

export interface DropDownListItemProps {
    label: string;
    value: any;
}

export interface DropDownListProps {
    id: string;
    value: any; //nesse parametro na verdade deve ser informado o label
    items: DropDownListItemProps[];
    placeholder?: string;
    onChange?(value: any): any;
}

const DEFAULT_PLACEHOLDER = "Selecione uma opção";

const DropDownList = (props: DropDownListProps) => {

    const { id, value, placeholder, items, onChange } = props;
    const listName = `${id}s`;

    const handleOnChange = (e: any) => {
        if (onChange && typeof onChange === 'function') {
            //está sendo feito desta maneira porque como padrao o datalist exibe na opção tanto o value como o label, por isso foi feito o uso do atributo data-value
            const dataValue = document.querySelector(`#${e.target.list.id} [value="${e.target.value}"]`)?.getAttribute('data-value');        
            onChange(dataValue);
        }
    }

    return (
        <>
            <input
                type="text"
                list={listName}
                name={id}
                id={id}
                value={value}
                placeholder={placeholder || DEFAULT_PLACEHOLDER}
                onChange={handleOnChange}
            />
            <datalist id={listName}>
                {
                    items?.map(item => (
                        <option
                            key={item.value}
                            data-value={item.value} //
                            value={item.label}
                        />
                    ))
                }
            </datalist>
        </>
    )
};

export default DropDownList;