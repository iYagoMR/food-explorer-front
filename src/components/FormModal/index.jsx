import { Container } from "./styles";
import { IoIosClose } from "react-icons/io";
import { Button } from "../../components/Button";

export function FormModal({title, inputs, modalIsOpen, onCloseModal, btnClick}){
    return(
        <Container data-open-modal={modalIsOpen}>
            <div>
                <div className="modal-header">
                    <h1>{title}</h1>
                    <button onClick={onCloseModal}><IoIosClose/></button>
                </div>

                <div className="inputs">
                    {inputs}
                    
                    <Button onClick={btnClick} title="Save"/>
                </div>
            </div>
        </Container>
    )
}