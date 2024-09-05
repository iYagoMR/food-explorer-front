import { Container } from './styles';
import { PageSection } from '../../components/PageSection';
import { ContentTab } from '../../components/ContentTab';
import { Bottom } from '../../components/Bottom';
import { Header } from '../../components/Header';
import { OrderItem } from '../../components/OrderItem';
import { Input } from '../../components/Input'

import { remove, selectTotalPrice } from '../../store'

import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../components/Button';

export function OrderCheckout(){

    const totalPrice = useSelector(selectTotalPrice);

    const dispatch = useDispatch();

    function handleRemoveDish(dish){
        dispatch(remove(dish))
    }

    const orderItems = useSelector(store => {
        return store.todo
    })

    //Create tabs data
    const addressTabs = [
        { key: '1', name: 'Delivery' },
        { key: '2', name: 'Takeout' }
    ];

    const addressContents = [
        <div key="1" className='delivery'>
            <div>
                <h3>130, Eastchester Av.</h3>
                <span>St. Catharines, ON</span>
            </div>

            <button>Trocar</button>
        </div>,
        <div key="2" className='takeout'>
            <h3>Restaurant address:</h3>
            <span>310, Ontario St.</span>
        </div>
    ];

    const paymentTabs = [
        { key: 'p1', name: 'Credit' },
        { key: 'p2', name: 'Debit' }
    ];

    const paymentContents = [
        <div key="p1" className='card'>
            <form>
                <Input label="Card number" name="card-number" placeholder="0000 0000 0000 0000"/>
                <Input label="Expiry date" name="expiry-number" placeholder="04/25"/>
                <Input label="Security code" name="security-code" placeholder="000"/>
                <Input label="Cardholder name" name="holder-name" placeholder="Ex: Jhon Smith"/>

                <Button title="Confirm payment"/>
            </form>
        </div>,
        <div key="p2" className='card'>
            <form>
                <Input label="Card number" name="card-number" placeholder="0000 0000 0000 0000"/>
                <Input label="Expiry date" name="expiry-number" placeholder="04/25"/>
                <Input label="Security code" name="security-code" placeholder="000"/>
                <Input label="Cardholder name" name="holder-name" placeholder="Ex: Jhon Smith"/>

                <Button title="Confirm payment"/>
            </form>
        </div>
    ];

    return(
        <Container>
            <Header/>
            <main>
                <PageSection
                    title="Checkout"
                />

                <ContentTab tabNames={addressTabs} tabContents={addressContents} />

                <div className='order-items'>
                    <h1>Your order</h1>
                    <ul>
                        {
                            orderItems.map(dish => 
                                <OrderItem
                                    key={dish.id}
                                    name={dish.name}
                                    picture={dish.picture}
                                    price={dish.price}
                                    quantity={dish.quantity}
                                    onClick={() => handleRemoveDish(dish)}
                                />
                            )
                        }
                    </ul>
                    <p>Total price: $ {totalPrice.toFixed(2)}</p>
                </div>

                <div className='payment-info'>
                    <h1>Payment information</h1>
                    <div className='payment-types'>
                        <ContentTab tabNames={paymentTabs} tabContents={paymentContents}/>
                    </div>
                </div>

            </main>
            <Bottom/>
        </Container>
    )
}