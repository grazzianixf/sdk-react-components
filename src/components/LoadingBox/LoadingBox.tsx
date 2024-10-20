import React from 'react'
import "./LoadingBox.css";

export interface LoadingBoxProps {
    isOpen: boolean;
}

export const LoadingBox = (props: LoadingBoxProps) => {
    const { isOpen } = props;

    const off = () => {
        let overlay = document.getElementById("overlay");

        if (overlay) {
            overlay.style.display = "none";
        }
    }

    return (
        <div
            id="overlay"
            style={{ display: isOpen ? 'block' : 'none' }}
            className='overlay'
            onClick={off}
        >

        </div>
    )
}