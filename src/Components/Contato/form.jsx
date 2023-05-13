import { useState } from 'react'
import {DivForm,Form} from './styled'



const Formulario = () =>{

    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [tel, setTel] = useState('')
    const [text, setText] = useState('')

function sendEmail(e){
    e.preventDefault();

    if(name === '' || mail === ''|| tel === '' ||text === ''){
        alert('Preencha todos os campos')
        return;
    }
    
}

    return(
            <DivForm onSubmit={sendEmail}>
                <h2>envie sua mensagem</h2>
                <Form>
                    <input type="text" placeholder='Seu nome' onChange={(e) => setName(e.target.value)} value={name}/>
                    <input type="mail" placeholder='E-mail' onChange={(e) => setMail(e.target.value)} value={mail} />
                    <input type="tel" placeholder='Telefone' onChange={(e) =>setTel(e.target.value)} value={tel} /> 
                    <textarea type="text" placeholder='Mensagem' onChange={(e) => setText(e.target.value)} value={text}/>
                    <button>Enviar</button>
                </Form>
            </DivForm>
    )
}

export default Formulario
