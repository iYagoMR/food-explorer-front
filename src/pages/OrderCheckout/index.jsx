import { Container } from './styles';
import { PageSection } from '../../components/PageSection';
import { ContentTab } from '../../components/ContentTab';
import { Bottom } from '../../components/Bottom';
import { Header } from '../../components/Header';
import { OrderItem } from '../../components/OrderItem';
import { Input } from '../../components/Input'
import { Button } from '../../components/Button';
import { FormModal } from '../../components/FormModal';
import { MdOutlineArrowForwardIos } from "react-icons/md";

import { api } from '../../services/api'

import { add, remove, clearStorage, selectTotalPrice } from '../../store'

import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Cart } from '../../components/Cart';

export function OrderCheckout(){
    const [ paymentMethod, setPaymentMethod ] = useState("Credit");
    const totalPrice = useSelector(selectTotalPrice);

    //Address related
    const [ addModalIsOpen, setAddModalIsOpen ] = useState(false)
    const [ editModalIsOpen, setEditModalIsOpen ] = useState(false)
    const [ orderAddress, setOrderAddress ] = useState("");
    const [ orderCity, setOrderCity ] = useState("");
    const [ orderState, setOrderState ] = useState("");
    const [ addressData, setAddressData ] = useState(null);
    const [ cartIsOpen, setCartIsOpen ] = useState(false);
    const [ isTakeout, setIsTakeout ] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const params = useParams();

    function handleRemoveDish(dish){
        dispatch(remove(dish))
    }
    function handleStorageClear(){
        dispatch(clearStorage())
    }

    const orderItems = useSelector(store => {
        return store.todo
    })

    //Create data to populate components
    const addressTabs = [
        { key: '1', name: 'Delivery' },
        { key: '2', name: 'Takeout' }
    ];

    const addressContents = [
        <div key="1" className='delivery'>
            {addressData ? ( 
                <>
                    <div className='address'>
                        <div>
                            <h3>{addressData.address}</h3>
                            <span>{addressData.city + " " + addressData.state}</span>
                        </div>
                        <button onClick={() => setEditModalIsOpen(true)}>Edit</button>
                    </div>
                    
                </>
            ) :
                <button onClick={() => setAddModalIsOpen(true)} className='add'>
                    <h3>Add address</h3>
                    <MdOutlineArrowForwardIos/>
                </button>
            } 
        </div>,
        <div key="2" className='takeout'>
            <h3>130 Ontario Street</h3>
            <span>St.Catherines, Ontario</span>
        </div>
    ];

    const paymentTabs = [
        { key: 'p1', name: 'Credit' },
        { key: 'p2', name: 'Debit' }
    ];

    const addAddress = [
        <Input 
            key={1}
            label="Address"
            name="address"
            type="text"
            placeholder="Ex: 130 Ontario St"
            onChange={e => setOrderAddress(e.target.value)}
        />,
        <Input 
            key={2}
            label="City"
            name="city"
            type="text"
            placeholder="Ex: St. Catharines"
            onChange={e => setOrderCity(e.target.value)}
        />,
        <Input 
            key={3}
            label="State"
            name="state"
            type="text"
            placeholder="Ex: Ontario"
            onChange={e => setOrderState(e.target.value)}
        />
    ]
    const editAddress = [
        <Input 
            key={1}
            label="Address"
            name="address"
            type="text"
            placeholder="Ex: 130 Ontario St"
            onChange={e => setOrderAddress(e.target.value)}
            value={orderAddress}
        />,
        <Input 
            key={2}
            label="City"
            name="city"
            type="text"
            placeholder="Ex: St. Catharines"
            onChange={e => setOrderCity(e.target.value)}
            value={orderCity}
        />,
        <Input 
            key={3}
            label="State"
            name="state"
            type="text"
            placeholder="Ex: Ontario"
            onChange={e => setOrderState(e.target.value)}
            value={orderState}
        />
    ]

    const paymentContents = [
        <div key="p1" className='card'>
            <form>
                <Input label="Card number" name="card-number" placeholder="0000 0000 0000 0000"/>
                <Input label="Expiry date" name="expiry-number" placeholder="04/25"/>
                <Input label="Security code" name="security-code" placeholder="000"/>
                <Input label="Cardholder name" name="holder-name" placeholder="Ex: Jhon Smith"/>

                <Button onClick={handleOrderCheckout} title="Confirm payment"/>
            </form>
        </div>,
        <div key="p2" className='card'>
            <form>
                <Input label="Card number" name="card-number" placeholder="0000 0000 0000 0000"/>
                <Input label="Expiry date" name="expiry-number" placeholder="04/25"/>
                <Input label="Security code" name="security-code" placeholder="000"/>
                <Input label="Cardholder name" name="holder-name" placeholder="Ex: Jhon Smith"/>

                <Button onClick={handleOrderCheckout} title="Confirm payment"/>
            </form>
        </div>
    ];

    // Handler to change the payment method
    function handlePaymentTabChange(index) {
        const selectedMethod = paymentTabs[index].name;
        if(selectedMethod == "Taketout"){
            setIsTakeout(true);
        }
        else{
            setIsTakeout(false);
        }
    }
    // Handler to toggle the delivery/takeout
    function handleDeliveryTabChange(index) {
        const selectedMethod = addressTabs[index].name;
        setPaymentMethod(selectedMethod);
    }

    //Pull address data if any exist
    useEffect(() => {
        async function fetchAddress(){
          const response = await api.get(`/addresses`);
        
          setAddressData(response.data);
          setOrderAddress(response.data.address);
          setOrderCity(response.data.city);
          setOrderState(response.data.state);
        }

        fetchAddress();
    }, []);

    async function handleAddAddress(){

        const data = {
            address: orderAddress,
            city: orderCity,
            state: orderState
        };

        try{
            if(!orderAddress){
                return alert("You need to insert an address.");
            }
            if(!orderCity){
                return alert("You need to insert a city.");
            }
            if(!orderState){
                return alert("You need to insert a state.");
            }

            const response = await api.post(`/addresses`, data);

            const newAddress = response.data;

            setAddressData(newAddress);
            setAddModalIsOpen(false);
            alert("Address created successfully");
        }catch(error){
            alert("Failed to create address. Please try again.");
        }
    }

    async function handleAddressUpdate(){
        const data = {
            ...addressData, // Spread the current address data to keep other properties like id
            address: orderAddress,
            city: orderCity,
            state: orderState
        };
        
        try{
            if(!orderAddress){
                return alert("You need to insert an address.");
            }
            if(!orderCity){
                return alert("You need to insert a city.");
            }
            if(!orderState){
                return alert("You need to insert a state.");
            }

            await api.put(`/addresses/${addressData.id}`, data)

            setAddressData(data);
            setEditModalIsOpen(false);
            alert("Address edited successfully");
        }catch(error){
            alert("Failed to edit address. Please try again.");
        }
    }
    
    async function handleOrderCheckout(){

        if(orderItems.length == 0){
            return alert("You need to have at least one item in your order");
        }

        const data = {
            order_items: orderItems,
            total_price: totalPrice,
            payment_method: paymentMethod,
            address_id: isTakeout ? addressData.id : null
        }

        try{
            await api.post(`/orders`, data);

            //Clear redux storage after creating the order
            handleStorageClear();
            navigate("/");
            alert("Your order was accepted.");
        }catch(error){
            alert("Something went wrong with your order, please try again.");
        }
    }

    return(
        <Container>
            <FormModal 
                title="Add address" 
                inputs={addAddress} 
                onCloseModal={() => setAddModalIsOpen(false)}
                modalIsOpen={addModalIsOpen}
                btnClick={handleAddAddress}
            />
            <FormModal 
                title="Edit address" 
                inputs={editAddress} 
                onCloseModal={() => setEditModalIsOpen(false)}
                modalIsOpen={editModalIsOpen}
                btnClick={handleAddressUpdate}
            />
            <Cart 
                cartIsOpen={cartIsOpen} 
                onCloseCart={() => setCartIsOpen(false)}
            />
            <Header onOpenCart={() => setCartIsOpen(true)}/>
            <main>
                <PageSection
                    title="Checkout"
                />

                <ContentTab tabNames={addressTabs} tabContents={addressContents}/>

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
                        <ContentTab tabNames={paymentTabs} tabContents={paymentContents} onTabChange={handlePaymentTabChange}/>
                    </div>
                </div>

            </main>
            <Bottom/>
        </Container>
    )
}