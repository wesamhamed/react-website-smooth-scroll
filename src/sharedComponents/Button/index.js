import React from 'react';
import {Button as SharedButton} from "./styles/Button";

const Button = ({children,...restProps}) => {
    return (
        <SharedButton {...restProps}>{children}</SharedButton>
    )
}

export default Button;
