import { Container } from './styles';
import { IoMenuSharp } from "react-icons/io5";
import { PiReceipt } from "react-icons/pi";
import { Brand } from '../Brand';

export function Header(){
    return(
        <Container>
            <IoMenuSharp /> 
            <Brand width={24} height={24}/>
            <PiReceipt/>
        </Container>
    )
}
