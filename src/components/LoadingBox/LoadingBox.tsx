import React from 'react'
import "./LoadingBox.css";
import { Spinner } from './Spinner';

export interface LoadingBoxProps {
    isOpen: boolean;
    content?: string
}

export const LoadingBox = (props: LoadingBoxProps) => {
    const { isOpen, content } = props;

    // const off = () => {
    //     let overlay = document.getElementById("overlay");

    //     if (overlay) {
    //         overlay.style.display = "none";
    //     }
    // }

    return (
        <div
            id="overlay"
            style={{ display: isOpen ? 'block' : 'none' }}
            className='overlay'
            // onClick={off}
        >
            <div className='loadingBoxContent'>
                <Spinner />
                <br />
                {content}
            </div>
        </div>
    )
}