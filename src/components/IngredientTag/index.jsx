import { Container } from './styles';

export function IngredientTag({ data }){
    
    return(
        <Container>
            {data.name}
        </Container>
    )
}