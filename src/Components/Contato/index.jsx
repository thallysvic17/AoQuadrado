import {CiMail} from 'react-icons/ci'
import {BsWhatsapp,BsInstagram} from 'react-icons/bs'
import { NavMenu, Section2} from './styled'
import Formulario from './form'



const Contatos = () =>{
    return(
        <Section2>
            
            <NavMenu> 
                <ul className='social-links'>
                    <h1>Contatos</h1>
                    <p>Fale conosco</p>
                    <li>
                     <a href="#"><CiMail className='icons'/><span>ao2studioarquitetura@gmail.com</span></a>
                    </li>
                    <li>
                        <a href="#"><BsWhatsapp className='icons'/><span>(37) 98814-9845 | (37) 99140-1524</span></a>
                    </li>
                    <li>
                         <a href="https://www.instagram.com/ao2studio/"><BsInstagram className='icons'/><span>@ao2studio</span></a>    
                    </li>
                </ul>
            </NavMenu>

           <Formulario/>

        </Section2>
    )
}

export default Contatos