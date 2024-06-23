import { Container } from './styles'
import logo from '../../assets/logo.png'

export function Brand({ width, height }){
    return(
        <Container>
            <img src={logo} alt="Food explorer logo" width={width} height={height} />
            <h1>food explorer</h1>
        </Container>
    )
}