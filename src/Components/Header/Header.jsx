import './header.css'
import logoUrl from '../../assets/react.svg'

export default function Header () {
    return (
        <header className='site-header'>
            <div className='header-inner'>
                <img 
                src={logoUrl}
                alt="Logo"
                className='logo'
                />
            <h1 className='site-title'>InspirArte</h1>
            </div>

        </header>
    )
}
