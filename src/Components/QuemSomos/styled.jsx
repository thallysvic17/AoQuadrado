import styled from 'styled-components'


export const Section2 = styled.section`
  width: 100%;
  height: auto;
  
    h1{
        text-transform: uppercase;
        margin-left: 70px;
        font-size: 50px;
        margin-bottom: 20px;
        font-weight: 400;
        
    }
`


export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 90%;
    border-bottom: 1px solid #afaeae;
    margin-bottom: 50px;
    `



export const Cards = styled.div`               
    width: 100%;      
    display: flex;      
    margin-left: 90px;
    gap: 90px;
    margin-bottom: 50px ;  
    `



export const Card = styled.div`
    
    img{
        width: 280px;
        height: 270px;
        border-radius: 50%;
        box-shadow:  -18px 16px 3px  #585858;   
    }

    .rodape{
        text-align: center;
        margin-top: 40px;
        text-transform: uppercase;
        
        h3{
            font-weight: 500;
            margin-bottom: 5px;
            
        }

        span{
            color: #616060;
            line-height: 5px;
        }
    }
    
`

export const Asides = styled.div`
    
    width: 50%;
    height: auto;
    margin-right: 60px;
    margin-bottom: 60px;
    

    p{
    font-size: 15px;
    letter-spacing: 1px;
    padding-bottom: 1px;
    text-align: start;
    font-size: 19px;
        
    }
   
`