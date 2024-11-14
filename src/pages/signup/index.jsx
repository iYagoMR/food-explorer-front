import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Brand } from '../../components/Brand';

import { Link, useNavigate } from 'react-router-dom';

import { Container, Form } from './styles';
import { useState } from 'react';
import { api } from "../../services/api";

export function SignUp(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleSignUp(){
        if (!name || !email || !password) {
            return alert("Fill all the fields!");
        }
        api.post("/users", { name, email, password })
            .then(() => {
                alert("Account registered successfully!");

                navigate("/");

            }).catch(error => {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Registration failed.");
            }
        });
    }

    return(
        <Container>
            <Brand width={3} height={3} fontSize={2.5} pColor={"#065E7C"}/>

            <Form>
                <Input 
                    placeholder="Example: jhon@email.com"
                    type="text"
                    label="Email"
                    onChange={e => setEmail(e.target.value)}
                />

                <Input  
                    placeholder="Example: Jhon Smith"
                    type="text"
                    label="Name"
                    onChange={e => setName(e.target.value)}
                />

                <Input  
                    placeholder="At least 3 characters"
                    type="password"
                    label="Password"
                    onChange={e => setPassword(e.target.value)}
                />

                <Button 
                    title="Create account" 
                    onClick={handleSignUp}
                />

                <Link to="/">
                    <ButtonText
                        title="I already have an account"
                    />
                </Link>

            </Form>
        </Container>
    )
}