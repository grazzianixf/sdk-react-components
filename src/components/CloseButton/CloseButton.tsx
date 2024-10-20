import React from "react";
import "./CloseButton.css";

export interface CloseButtonProps {
    id?: string;
    onClick?: any;
}

export const CloseButton = (props: CloseButtonProps) => {
    const { id, onClick } = props;

    return <span className="closebtn" {...{ id, onClick }} >&times;</span>;
};

