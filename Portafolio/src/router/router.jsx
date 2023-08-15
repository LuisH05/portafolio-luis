import { createBrowserRouter } from "react-router-dom";
import Layout from '../layouts/Main.jsx'
import About from "../Pages/About.jsx";
import Home from "../App.jsx";
import Project from "../Pages/Project.jsx";
import Tecnologias from "../Pages/Tecnologias.jsx";

const routers = createBrowserRouter([
    {
        path:'/', element: <Layout />,
        children:[
            {path: '/', element: <Home />},
            {path: '/about', element: <About />},
            {path: '/project', element: <Project />},
            {path: '/technologie', element: <Tecnologias />},
        ]
    }
])

export default routers