import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App'
import AnimalsContainer from './components/AnimalsContainer'
import NewAnimalForm from './components/NewAnimalForm'
import AnimalPage from './components/AnimalPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const routes = [
    {
        path: "/app",
        element: <App />,
        children: [
            {
                index: true,
                element: <AnimalsContainer />
            },
            {
                path: "about",
                element: <h1>ABOUT PAGE</h1>
            },
            {
                path: "stuff",
                element: <h1>I AM STUFF</h1>
            },
            {
                path: "new-animal",
                element: <NewAnimalForm />
            },
            {
                path: 'animals/:id',
                element: <AnimalPage />
            }
        ]
    },
]

const router = createBrowserRouter(routes)

createRoot(document.getElementById('root')).render( <RouterProvider router={router} /> )