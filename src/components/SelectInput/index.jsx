import { Container } from "./styles";

import { FaChevronDown } from "react-icons/fa6";

export function SelectInput({label:Label, ...rest}) {
    return(
        <Container>
            <p>{Label}</p>
            <div>
                <select name="MealtTypes" id="MealtTypes">
                    <option value="Meal">Meal</option>
                </select>
                <FaChevronDown/>
            </div>
        </Container>
    )
}