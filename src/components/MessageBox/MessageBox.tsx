import React from 'react';
import { CloseButton } from '../CloseButton';
import "./MessageBox.css";

export interface MessageBoxProps {
    textMessage: string;
    visible: boolean;
    onCloseButton: any;
}

export const MessageBox = (props: MessageBoxProps) => {
    const { textMessage, visible, onCloseButton } = props;

    return (
        <div
            id="messageBox"
            className='messageBox'
            style={{ visibility: visible ? 'visible' : 'hidden' }}
        >
            <strong>{textMessage}</strong>
            <CloseButton onClick={onCloseButton} />
        </div>
    )
}