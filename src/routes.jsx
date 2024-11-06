import App from './components/App'
import AnimalsContainer from './components/AnimalsContainer'
import NewAnimalForm from './components/NewAnimalForm'
import AnimalPage from './components/AnimalPage'
import FourOhFour from './components/FourOhFour'

const routes = [
    {
        path: "/",
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
            },
            {
                element: <FourOhFour />,
                path: "*"
            }
        ]
    },
]

export default routes