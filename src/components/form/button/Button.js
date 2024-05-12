import React from 'react';
import { ButtonTag } from './Button.style';

export default function ComponentButton({ type, text, onClick }) {
    return (
        <ButtonTag type={type} className="button" onClick={onClick}>
            {text}
        </ButtonTag>
    );
};
