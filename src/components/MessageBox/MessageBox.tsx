import React from 'react';
import { CloseButton } from '../CloseButton';
import "./MessageBox.css";
import { Message } from '../../types';

export interface MessageBoxProps {
    textMessage: string;
    type: Message | null;
    visible: boolean;
    onCloseButton: any;
}

export const MessageBox = (props: MessageBoxProps) => {
    
    const { textMessage, visible, onCloseButton, type } = props;

    return (
        <div
            className={`messageBox ${type}`}
            style={{ visibility: visible ? 'visible' : 'hidden' }}
        >
            <strong>{textMessage}</strong>
            <CloseButton onClick={onCloseButton} />
        </div>
    )
}