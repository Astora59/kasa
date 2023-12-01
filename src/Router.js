import {Routes, Route} from "react-router-dom"
import Home from './Pages/Home/Home';
import FicheService from './Pages/FicheLogement/FicheLogement';
import Error from './Pages/404/error';
import About from './Pages/Apropos/About';

const listRoutes = [
    {
        path: "/",
        element: <Home />,
        id: Home
        
    },
    {
        path: "/logement/:id",
        element: <FicheService />,
        id: FicheService
        
    },
    {
        path: "/about", 
        element: <About />,
        id: About
    },
    {
        path: "*",
        element: <Error />,
        id: Error
    }
]


export function RoutesSite() {
    return (
        <Routes>
        {listRoutes.map(route => <Route path={route.path} element={route.element} key={route.id}/>)}
      </Routes>
    )
}