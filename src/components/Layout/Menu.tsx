import React from "react";
import "./Menu.css"

export interface MenuItem {
    key?: string;
    element: any;
}

export interface MenuProps {
    items: MenuItem[];
}

export const Menu = (props: MenuProps) => {

    return (
        <div className="topnav" >
            {
                props?.items
                    .map((item: MenuItem, index) => item.element)
            }
        </div>
    )
}