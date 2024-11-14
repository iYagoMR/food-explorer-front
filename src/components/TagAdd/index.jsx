import { TagItem } from '../TagItem';
import { Container } from './styles';

import { useState } from "react";

export function TagAdd({label, children}){
    return(
        <Container>
            <label>{label}</label>

            <div>
                {children}
            </div>
        </Container>
    )
}