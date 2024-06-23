import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Brand } from '../../components/Brand';

import { Link } from 'react-router-dom';

import { Container, Form } from './styles';

export function SignUp(){
    return(
        <Container>
            <Brand width={43}/>

            <Form>
                <Input 
                    placeholder="Exemplo: exemplo@exemplo.com.br"
                    type="text"
                    label="Email"
                    // onChange={e => setEmail(e.target.value)}
                />

                <Input  
                    placeholder="No mínimo 6 caracteres"
                    type="password"
                    label="Senha"
                    // onChange={e => setPassword(e.target.value)}
                />

                <Input  
                    placeholder="No mínimo 6 caracteres"
                    type="password"
                    label="Senha"
                    // onChange={e => setPassword(e.target.value)}
                />

                <Button 
                    title="Entrar" 
                    // onClick={handleSignIn}
                />

                <Link to="/register">
                    <ButtonText
                        title="Criar uma conta"
                    />
                </Link>

            </Form>
        </Container>
    )
}