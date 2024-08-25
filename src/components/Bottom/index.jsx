import { Brand } from '../../components/Brand'

import { Container } from './styles';

export function Bottom(){
    return(
        <Container>
            <div>
                <Brand noAdminTag width={2.7} height={2.2} fontSize={1.5} pColor={"#4D585E"}/>
                <p>© 2023 - All rights reserved</p>
            </div>
        </Container>
    )
}