import { Container, Ingredient, Add } from './styles';

import { FiPlus } from "react-icons/fi";
import { RiCloseFill } from "react-icons/ri";

export function IngredientAdd(){
    return(
        <Container>
            <p>Ingredients</p>
            <div>
                <Ingredient>
                    <p>Naan Bread</p>
                    <button>
                        <RiCloseFill/>
                    </button>
                </Ingredient>
                <Add>
                    <p>Add</p>
                    <button>
                        <FiPlus />
                    </button>
                </Add>
            </div>
        </Container>
    )
}