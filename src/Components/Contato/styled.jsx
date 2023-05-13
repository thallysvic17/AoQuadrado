import styled from 'styled-components'

 export const Section2 = styled.section`
    width: 100vw;
    height: 630px;
    background-color: black;
    display: flex;
    margin-bottom: 80px;
    
`

export const NavMenu = styled.nav`
    width: 50%;
    height: 500px;
    display: flex;
    margin-bottom: 50px;
   
   .social-links{
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-left: 80px;
    row-gap:20px;
   
    
    h1{
        color: #fff;
        padding-top: 30px;
        padding-bottom: 40px;
        font-weight: 300;
        font-size: 50px;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    p{
        color: #fff;
        font-size: 20px;
        text-transform: uppercase;
        padding-bottom: 5px;

    }

    li{
     list-style: none;
     

     a{
        color: #fff;
        font-size: 18px;
        text-decoration: none;
        font-weight: 400;
        letter-spacing: 1px;
         
        span{
            padding-left: 15px;

        }
    }

     a svg{
        font-size: 30px;
     }

     a:hover{
        color: #4d4c4c;
     }
    }
   }

   

`


export const DivForm = styled.div`
    width: 50%;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    h2{
        margin-bottom: 25px;
        font-size: 25px;
        text-transform: uppercase;
        color: #fff;
        font-weight: 300;
        margin-top: 180px;
        
        
    }
 
    
`

export const Form = styled.form`
    width: 60%;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
       
    input{
        width: 100%;
        padding: 14px;
        resize: none;
        background-color: #aaa7a7;
        outline: none;
        border: none;
        border-radius: 1px;
        }
        
    textarea {
        resize: none;
        padding: 22px;
        background-color: #aaa7a7;
        border-radius: 1px;
        border: none;
        }

    button{
        padding: 8px;
        width: 40%;
        background-color: #e0dddd;
        cursor: pointer;
        border: none;
        border-radius: 2px;
        }

    button:hover{
        background-color: #aaa7a7;
    }
    
`