import {HeaderStyle, Logo,NavMenu} from './styled'

import logo from '../../assets/Images/logos/logosite.jpeg'


const Header = () =>{




    return(
        <HeaderStyle>
            <Logo >
                <img src={logo.src} alt='Logo site' className="img"/>
                <div className="lg">
                    <h1>Ao quadrado</h1>
                    <p>studio de arquitetura</p>
                </div>     
            </Logo>

            <NavMenu>
            <ul>
                <li>
                <a href="#">Início</a>
                </li>
                <li>
                <a href="#">quem somos</a>
                </li>
                <li>
                <a href="#">portifólio</a>
                </li>
                <li>
                <a href="#">projeto online</a>
                </li>
                <li>
                <a href="#">contato</a>
                </li>
            </ul>
            </NavMenu>
      </HeaderStyle>
    )

    }

export default Header

