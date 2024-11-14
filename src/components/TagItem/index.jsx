import { useRef, useEffect } from 'react';
import { Container } from './styles';
import { FiPlus } from "react-icons/fi";
import { RiCloseFill } from "react-icons/ri";

export function TagItem({ isNew, value, onClick, ...rest }) {
    const inputRef = useRef(null);

    //Resize input to always fit content
    useEffect(() => {
        if (isNew) {
            const input = inputRef.current;
            const resizeInput = () => {
                // Set the width based on the content, but limit it to 100% of the container
                input.style.width = `${input.value.length + 1}ch`;

                if(input.value.length >= 26){
                    input.style.width = `26ch`;
                }
            };
            
            // Resize input when component mounts
            resizeInput();
    
            // Resize input on every change
            input.addEventListener('input', resizeInput);
    
            // Clean up event listener when component unmounts
            return () => {
                input.removeEventListener('input', resizeInput);
            };
        }
    }, [value, isNew]);

    return (
        <Container isNew={isNew}>
            <input
                type='text'
                ref={inputRef}
                value={value}
                readOnly={isNew} // set readOnly to false when isNew is true
                {...rest}
            />
            <button
                type='button'
                onClick={onClick}
                className={isNew ? 'button-add' : 'button-delete'}
            >
                {isNew ? <RiCloseFill /> : <FiPlus />}
            </button>
        </Container>
    );
}
