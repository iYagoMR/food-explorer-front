import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';

import logo from '../../assets/logo.png'

import { Link } from 'react-router-dom';

import { Container, Brand, Form } from './styles';

export function Login(){
    return(
        <Container>
            <Brand>
                <img src={logo} alt="Food explorer logo" />
                <h1>food explorer</h1>
            </Brand>

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