import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/home';
import { DishDetails } from '../pages/DishDetails';
import { SearchResults } from '../pages/SearchResults';
import { OrderCheckout } from '../pages/OrderCheckout';
import { NotFound } from '../pages/NotFound';

export function CustomerRoutes() {
    return(
        <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/dish-details/:id" element={ <DishDetails/> } />
            <Route path="/search-results/:searchString" element={ <SearchResults/> } />
            <Route path="/order-checkout" element={ <OrderCheckout/> } />

            <Route path='*' exact={true} element={<NotFound/>} />
        </Routes>
    )
}
