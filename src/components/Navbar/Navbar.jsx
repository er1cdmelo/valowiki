import { Nav } from "./styles"
import Logo from '../../assets/Logo.svg';
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <Nav>
      <Link to='/'><img src={Logo} alt="Logo" /></Link>
    </Nav>
  )
}

export default Navbar