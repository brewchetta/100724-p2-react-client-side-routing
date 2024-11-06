import { useState, useEffect } from 'react'
import AnimalsContainer from "./AnimalsContainer"
import NewAnimalForm from "./NewAnimalForm"

// CRUD: CREATE READ UPDATE DESTROY
// CRED: CREATE READ EDIT DELETE

function App() {

  const [animals, setAnimals] = useState([])
  const [isLoading, setLoading] = useState(true)

  async function getAnimals() {
    const response = await fetch('http://localhost:3000/animals')
    const animalData = await response.json()
    setAnimals(animalData)
    setLoading(false)
  }
  
  useEffect(() => {
    getAnimals()
  }, [])

  if (isLoading) {
    return (<h1>LOADING.....</h1>)
  }

  return (
    <div className="App">

      <NewAnimalForm animals={animals} setAnimals={setAnimals} />

      <AnimalsContainer animals={animals} setAnimals={setAnimals} />

    </div>
  )
}

export default App