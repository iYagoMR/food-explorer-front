import { Container } from "./styles";

export function Input({label:Label, icon:Icon, isTextArea, name, ...rest}) {
    return(
        <Container>
            <label htmlFor={name}>{Label}</label>
            
            {
                !isTextArea &&
                <div>
                    {Icon && <Icon size={20}/>}
                    <input name={name} id={name} {...rest}/>
                </div>
            }
            {
                isTextArea &&
                <textarea 
                    id={name} 
                    name={name} 
                    rows="4" 
                    {...rest}
                >
                </textarea>
            }

        </Container>
    )
}   