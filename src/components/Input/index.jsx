import { Container } from "./styles";

export function Input({label:Label, icon:Icon, ...rest}) {
    return(
        <Container>
            <p>{Label}</p>
            <div>
                {Icon && <Icon size={20}/>}
                <input {...rest}/>
            </div>
        </Container>
    )
}