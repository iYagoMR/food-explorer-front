import { Container, Banner, DishSection } from './styles';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

import { DishCard } from '../../components/DishCard';
import { Bottom } from '../../components/Bottom'
import { Header } from '../../components/Header';

import BannerImg from '../../assets/banner-img.png'

import dishPlaceholderImg from '../../assets/plates/Mask group-10.png'
import { Cart } from '../../components/Cart';

export function Home(){
    const [search, setSearch] = useState("");
    const [ingredientsSelected, setIngredientsSelected ] = useState([]);
    const [dishes, setDishes] = useState([]);
    const [ cartIsOpen, setCartIsOpen ] = useState(false);

    const [cart, setCart] = useState(() => {
        // Retrieve cart from localStorage if it exists
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const navigate = useNavigate();

    function handleDetails(id){
        navigate(`/details/${id}`)
    }
    
    useEffect(() => {
        async function fetchDishes(){
            const response = await api.get(`/dishes?name=${search}&ingredients=${ingredientsSelected}`);
            setDishes(response.data);
        }
        fetchDishes();
    }, [ingredientsSelected, search]);
    
    const addToCart = (item) => {
        setCart((prevCart) => {
          const updatedCart = [...prevCart, item];
          localStorage.setItem('cart', JSON.stringify(updatedCart));
          return updatedCart;
        });
    };
    
    return(
        <Container>
            <Cart 
                cartIsOpen={cartIsOpen} 
                onCloseCart={() => setCartIsOpen(false)}
                cart={cart}
            />
            <Header onOpenCart={() => setCartIsOpen(true)}/>
            <main>
                <Banner>
                    <img src={BannerImg} alt="banner image showing french macarons, strawberries and bluebeeries" />
                    <div>
                        <h2>Unparalleled flavors</h2>
                        <p>Feel the care of the preparation with selected ingredients.</p>
                    </div>
                </Banner>
                <div className='sections'>
                    <DishSection>
                        <h2>Meals</h2>
                        <div>
                        {
                            dishes && dishes
                                .filter(dish => dish.category == "meal")
                                .map(dish => (
                                    <DishCard 
                                        key={String(dish.id)}
                                        data={dish}
                                        addDish={(dishWithQuantity) => addToCart(dishWithQuantity)}
                                    />
                                ))
                        }
                        </div>
                    </DishSection>
                    <DishSection>
                        <h2>Salads</h2>
                        <div>
                            {
                                dishes && dishes
                                    .filter(dish => dish.category == "salad")
                                    .map(dish => (
                                        <DishCard 
                                            key={String(dish.id)}
                                            data={dish}
                                            addDish={(dishWithQuantity) => addToCart(dishWithQuantity)}
                                        />
                                    ))
                            }
                        </div>
                    </DishSection>
                    <DishSection>
                        <h2>Desserts</h2>
                        <div>
                            {
                                dishes && dishes
                                    .filter(dish => dish.category == "dessert")
                                    .map(dish => (
                                        <DishCard 
                                            key={String(dish.id)}
                                            data={dish}
                                            addDish={(dishWithQuantity) => addToCart(dishWithQuantity)}
                                        />
                                    ))
                            }
                        </div>
                    </DishSection>
                </div>

            </main>
            <Bottom/>
        </Container>
    )
}