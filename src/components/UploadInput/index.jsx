import { Container } from './styles';

export function UploadInput({label:Label, placeholder:Placeholder, name, icon:Icon, ...rest}) {
    return(
        <Container>
            <p>{Label}</p>
            <label>
                {Icon && <Icon size={20}/>}
                <p>{Placeholder}</p>
                <input name={name} id={name} type='file' {...rest}/>
            </label>
        </Container>
    )
}