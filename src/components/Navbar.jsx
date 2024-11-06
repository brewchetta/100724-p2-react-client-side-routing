import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/stuff">Stuff</Link>
        <Link to="/new-animal">New Animal</Link>
    </div>
  )
}

export default Navbar