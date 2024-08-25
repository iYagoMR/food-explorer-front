import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/home';
import { DishDetails } from '../pages/DishDetails';
import { SearchResults } from '../pages/SearchResults';
import { NewDish } from '../pages/NewDish';
import { EditDish } from '../pages/EditDish';
import { NotFound } from '../pages/NotFound';

export function AdminRoutes() {
    return(
        <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/dish-details/:id" element={ <DishDetails/> } />
            <Route path="/new-dish" element={ <NewDish/> } />
            <Route path="/edit-dish/:id" element={ <EditDish/> } />
            <Route path="/search-results/:searchString" element={ <SearchResults/> } />
            
            <Route path='*' exact={true} element={<NotFound/>} />
        </Routes>
    )
}
