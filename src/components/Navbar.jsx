import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <Link to="/app">Home</Link>
        <Link to="/app/about">About</Link>
        <Link to="/app/stuff">Stuff</Link>
        <Link to="/app/new-animal">New Animal</Link>
    </div>
  )
}

export default Navbar