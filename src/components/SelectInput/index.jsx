import { Container } from "./styles";

import { FaChevronDown } from "react-icons/fa6";

export function SelectInput({label:Label, options, name, ...rest}) {
    return(
        <Container>
            <label htmlFor={name}>{Label}</label>
            <div>
                <select {...rest} name={name} id={name}>
                    {options}
                </select>
                <FaChevronDown/>
            </div>
        </Container>
    )
}