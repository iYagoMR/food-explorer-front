import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/home';
import { DishDetails } from '../pages/DishDetails';
import { SearchResults } from '../pages/SearchResults';
import { Favorites } from '../pages/Favorites';
import { OrderHistory } from '../pages/OrderHistory';
import { OrderCheckout } from '../pages/OrderCheckout';
import { NotFound } from '../pages/NotFound';

export function CustomerRoutes() {
    return(
        <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/dish-details/:id" element={ <DishDetails/> } />
            <Route path="/favorites" element={ <Favorites/> } />
            <Route path="/order-history" element={ <OrderHistory/> } />
            {/* String in the search should be optional */}
            <Route path="/search-results/:searchString?" element={ <SearchResults/> } />
            <Route path="/order-checkout" element={ <OrderCheckout/> } />

            <Route path='*' exact={true} element={<NotFound/>} />
        </Routes>
    )
}
