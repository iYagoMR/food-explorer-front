import { Routes, Route } from 'react-router-dom';

import { Login } from '../pages/login';
import { SignUp } from '../pages/signup';
import { Home } from '../pages/home';
//import { New } from '../pages/New';
// import { Home } from '../pages/Home';
// import { Profile } from '../pages/Profile';
// import { Details } from '../pages/Details';

export function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={ <Home/> } />
        </Routes>
    )
}
