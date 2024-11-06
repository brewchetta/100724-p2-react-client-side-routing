import { useState, useEffect } from 'react'
import AnimalCard from "./AnimalCard"

function AnimalsContainer() {

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

    const mappedAnimals = animals.map(a => <AnimalCard key={a.id} animal={a} setAnimals={setAnimals} />)

    return (
    <div className="cards-container">

        { mappedAnimals }

    </div>
  )
}

export default AnimalsContainer