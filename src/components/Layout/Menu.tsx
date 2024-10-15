import React from "react";

export interface MenuItem {
    key?: string;
    element: any;
}

export interface MenuProps {
    items: MenuItem[];
}

export const Menu = (props: MenuProps) => {
    return (
        <nav>
            <ul style={{ listStyleType: "none", margin: 0, padding: 0, overflow: "hidden" }}>
                {
                    props?.items
                        .map((item: MenuItem, index) =>
                            <li
                                style={{ float: "left", padding: "5pt" }}
                                key={item.key || index}>
                                {item.element}
                            </li>
                        )}
            </ul>
        </nav>
    )
}