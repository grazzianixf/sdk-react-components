import React from 'react'
import { CloseButton } from '../CloseButton'
import "./MessageBox.css"

export interface MessageBoxProps {
    textMessage: string;
}

export const MessageBox = (props: MessageBoxProps) => {
    const { textMessage } = props;

    const closeMessageBox = () => {
        let messageBox = document.getElementById("messageBox");
        if (messageBox) {
            messageBox.className = messageBox.className.replace("show", "");
        }
    }

    return (
        <div
            id="messageBox"
            className='messageBox'
        >
            <strong>{textMessage}</strong>
            <CloseButton onClick={closeMessageBox} />
        </div>
    )
}