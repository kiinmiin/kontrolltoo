import logo from '../assets/logo.jpg'
import Button from './UI/Button'

const Header = (props) => {

    return (
        <header id="main-header">
            <div id="title">
                <img src={logo}/>
                <h1>React Food Order App</h1>
            </div>
            <nav>
            <Button className='text-button'>Cart (0)</Button>
            </nav>
        </header>
    )
}

export default Header