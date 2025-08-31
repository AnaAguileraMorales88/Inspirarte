import './header.css'
import logo from '../../assets/images/logo.jpg'

export default function Header() {
  return (
<header className='site-header'>
  <section className='header-inner'>
    <a href="#">
      <img src={logo} alt="InspirArte Logo" className='site-logo' />
    </a>
    <nav className="site-nav">
      <a href="#añadir" className="nav-link">Crear</a>
      <a href="#misfavoritas" className="nav-link">Mis Frases Favoritas</a>
    </nav>
  </section>
</header>
  )
}
