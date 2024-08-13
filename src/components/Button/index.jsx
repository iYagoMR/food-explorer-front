import { Container } from './styles';

export function Button({ title, icon:Icon, price:Price, loading = false, ...rest }){
    return (
        <Container
            type="button"
            disabled={loading}
            {...rest}
        >
            { Icon && <Icon size={27}/> }
            { loading ? 'Carregando...' : title }
            { Price ? " ∙ $ " : ""}
            { Price }
        </Container>
    );
}