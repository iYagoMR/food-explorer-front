import { Container } from './styles';

import { api } from '../../services/api';

export function OrderItem({picture, name, quantity, price, onClick}){

    const pictureUrl = `${api.defaults.baseURL}/files/${picture}`;
    
    return(
        <Container>
            <img src={pictureUrl} alt={`${name} picture`} />
            <div>
                <div className='order-description'>
                    <h3>{quantity}x {name}</h3> <span>$ {price}</span>
                </div>
                <button onClick={onClick}>Remove</button>
            </div>
        </Container>
    )
}