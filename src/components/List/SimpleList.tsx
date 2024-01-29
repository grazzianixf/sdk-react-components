import React from "react"
import { Action } from "../../types/Action"

interface SimpleListProps {
    data?: any[],
    idFieldName?: string,
    labelFieldName?: string,
    actions?: Action[]
}

const getId = (item: any, idFieldName?: string) => {
    if (typeof item === "string") {
        return item
    }

    if (idFieldName) {
        return item[idFieldName]
    } else {
        return item[Object.keys(item)[0]]
    }
}

const getLabel = (item: any, labelFieldName?: string) => {
    if (typeof item === "string") {
        return item
    }
        
    if (labelFieldName) {
        return item[labelFieldName]
    } else {
        return item[Object.keys(item)[1]]
    }
}

const getElement = (itemAction: Action, key: string, ...params: any[]) => {
    if (itemAction) {
        if (itemAction.action) {
            return (<button key={key} onClick={_ => itemAction.action(...params)}>{itemAction.name}</button>);
        } else if (itemAction.element) {
            return (itemAction.element);
        }
    }
}

export const SimpleList = (props: SimpleListProps) => {
    return (
        <>
            <ul>
                {props.data?.map(item => {
                    let id = getId(item, props.idFieldName);
                    let label = getLabel(item, props.labelFieldName);

                    return (

                        <li key={id}>
                            {label}
                            {
                                props.actions
                                && props.actions?.map(itemAction => getElement(itemAction, `btn_${id}_${itemAction.name}`, item))
                            }
                        </li>
                    )
                }
                )}
            </ul>
        </>
    )
}