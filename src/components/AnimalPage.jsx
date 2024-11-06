import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function AnimalPage() {

    const [animal, setAnimal] = useState({})
    const params = useParams()
    const [error, setError] = useState(null)

    async function fetchAnimal() {
        try {
            const response = await fetch(`http://localhost:3000/animals/${params.id}`)
            const data = await response.json()
            setAnimal(data)

        } catch (caughtError) {
            console.log(caughtError)
            setError(caughtError)
        }
    }

    useEffect(() => {
        fetchAnimal()
    }, [])

    if (error) {
        return (
            <div>
                <h2>DONT DO THAT</h2>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl_xSmVwIVRo2z1raRtxnMhTUQ4bwcfDut1w&s" alt="animal" />
            </div>
        )
    }

    return (
        <div>
            <img src={ animal.image } />

            <h2>{animal.name}</h2>
        </div>
    )
}

export default AnimalPage