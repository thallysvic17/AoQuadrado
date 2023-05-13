import styled from 'styled-components'

 export const HeaderStyle =  styled.header`
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: black;
    width: 100%;
    height: 90px;
    font-family: 'Inter', sans-serif;
  
//mobile
    @media (max-width:767px){
        
         

    }
 `

export const Logo = styled.div`
    display: flex;

.img{
    margin-left: 50px;
    width: 60px;
}

.lg{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 25px;


    h1{
    color: #fff;
    font-size: 18px;
    font-weight: normal;
    text-transform: uppercase;
    letter-spacing: -1px;
}

    p{
        color: #fff;
        font-size: 9px;
        text-transform: uppercase;
        
        
        margin-top: 1px;
    } 
}

//mobile
    @media (max-width:767px){
            margin: 0 auto;
            
        .img{
            width: 70px;
            margin: 0 auto;
            
        }

        .lg{
            display: none;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-left: 20px;


            h1{
            color: #fff;
            font-size: 16px;
            font-weight: normal;
            text-transform: uppercase;
            letter-spacing: -1px;
        }

            p{
                color: #fff;
                font-size: 8px;
                text-transform: uppercase;
                margin-top: 1px;
            } 
        }
            }
`

export const NavMenu = styled.nav`
    
        
        ul{
            display: flex;
            gap: 30px;
            list-style: none;
        }
        ul:last-child{
            margin-right: 50px;
        }

        a{
            text-decoration:none;
            color: #fff;
            text-transform: uppercase;
            font-size: small;
        }

        a:hover{
            color: #eeeeeec3;
        }
        
    @media (max-width:767px){
        display: none;
    }
`