import { Brand } from '../../components/Brand'

import { Container } from './styles';

export function Bottom(){
    return(
        <Container>
            <Brand width={27} height={22} fontSize={15} pColor={"#4D585E"}/>
            <p>© 2023 - All rights reserved</p>
        </Container>
    )
}