import { DishCard } from '../../components/DishCard';
import { Header } from '../../components/Header';
import { Container } from './styles';
import { Cart } from '../../components/Cart';

import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { api } from '../../services/api';
import { PageSection } from '../../components/PageSection';
import { Bottom } from '../../components/Bottom';

export function SearchResults(){

    const [dishes, setDishes] = useState([]);
    const [ cartIsOpen, setCartIsOpen ] = useState(false);
    const { searchString } = useParams();
    const navigate = useNavigate();

    function handleDetails(id){
        navigate(`/details/${id}`)
    }

    useEffect(() => {
        async function fetchDishes(){
            const response = await api.get(`/dishes?name=${searchString}&ingredient=${searchString}`);
            //const response = await api.get(`/dishes?name=${params.searchString}`);
            setDishes(response.data);
        }
        
        fetchDishes();
    }, [searchString]);

    return(
        <Container>
            <Cart 
                cartIsOpen={cartIsOpen} 
                onCloseCart={() => setCartIsOpen(false)}
            />
            <Header onOpenCart={() => setCartIsOpen(true)}/>

            <main>
                <PageSection/>
                <div className='dishes'>
                    { 
                        dishes.length > 0 ? ( 
                            dishes.map(dish => (
                                <DishCard 
                                    key={String(dish.id)}
                                    data={dish}
                                />
                            ))
                        ) : (
                        <h1>No dishes available that correspond your search.</h1>
                    )}
                </div>
            </main>

            <Bottom/>
        </Container>
    )
}