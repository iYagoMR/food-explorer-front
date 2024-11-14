import { Container } from './styles';
import { MdArrowBackIosNew } from "react-icons/md";

import { useNavigate } from 'react-router-dom';

export function PageSection({title:Title}){

    const navigate = useNavigate();
  
    function handleBack(){
      navigate(-1)
    }

    return(
        <Container>
            <a onClick={handleBack}>
                <MdArrowBackIosNew/>
                <span>back</span>
            </a>

            <h1>{Title}</h1>

        </Container>
    )
    
}