import { useState } from "react";
import { useAuth } from '../../hooks/auth';

import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Brand } from '../../components/Brand';

import { Link } from 'react-router-dom';

import { Container, Form } from './styles';

export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const { signIn } = useAuth();
  
    function handleSignIn() {
        signIn({ email, password });
    }
  
    return (
      <Container>
        <Brand width={43}/>
        <Form>
            <Input 
                placeholder="Exemple: exemple@exemple.com"
                type="text"
                label="Email"
                onChange={e => setEmail(e.target.value)}
            />
            <Input  
                placeholder="At least 6 characters"
                type="password"
                label="Senha"
                onChange={e => setPassword(e.target.value)}
            />

            <Button 
                title="Login" 
                onClick={handleSignIn}
            />

            <Link to="/register">
                <ButtonText
                    title="Create account"
                />
            </Link>
        </Form>
      </Container>
    )
  }