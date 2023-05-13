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

//tablet
    @media (min-width: 768px) and (max-width: 1100px){
        
        h1{
        margin: 0 auto;
        font-size: 25px;
        text-align: center; 
    }
    }
//mobile
    @media (max-width: 767px){
        h1{
        margin: 0 auto;
        font-size: 25px;
        text-align: center; 
    }
    }

`


export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 90%;
    border-bottom: 1px solid #afaeae;
    margin-bottom: 50px;

//tablet
    @media (min-width: 768px) and (max-width: 1100px){

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-bottom: 10px;
    }
//mobile
    @media (max-width: 768px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 80%;
        margin: 0 auto;
    }
    `



export const Cards = styled.div`               
    width: 100%;      
    display: flex;      
    margin-left: 90px;
    gap: 90px;
    margin-bottom: 50px ;  

//tablet
    @media (min-width: 768px) and (max-width: 1100px){
        width: 100%;
        align-items: center;
        justify-content: center;
        margin-left: 0;
        gap: 50px;
        text-align: center;
    }
//mobile
    @media (max-width: 767px){
        width: 50%;
        align-items: center;
        justify-content: center;
        margin-left: 0;
        gap: 50px;
        text-align: center;
        display: flex;
        flex-direction: column;
        margin-top: 20px;
        
    }
    `



export const Card = styled.div`
    
    img{
        width: 280px;
        height: 270px;
        border-radius: 50%;
        box-shadow:  -14px 14px 3px  #585858;   
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
    //desktop
    @media (min-width: 1100px) and (max-width: 1300px){

        img{
            width: 200px;
            height: 200px;
        }

        .rodape{
        text-align: center;
        margin-top: 20px;
        text-transform: uppercase;
        
        h3{
            font-weight: 500;
            margin-bottom: 5px;
            font-size: 16px;
            
        }

        span{
            color: #616060;
            line-height: 5px;
            font-size: 14px;
        }
    }
  
    }
    //tablet
    @media (min-width: 768px) and (max-width: 1100px){
        img{
        width: 150px;
        height: 150px;
        border-radius: 50%;
        box-shadow:  -16px 14px 3px  #585858;   
    }

    .rodape{
        text-align: center;
        margin-top: 10px;
        text-transform: uppercase;
        
        h3{
            font-weight: 500;
            margin-bottom: 5px;
            font-size: 12px;
            
        }

        span{
            color: #616060;
            line-height: 5px;
            font-size: 10px;
            
        }
    }

    }
//mobile
    @media (max-width: 768px){

        img{
        width: 150px;
        height: 150px;
        border-radius: 50%;
        box-shadow:  -16px 14px 3px  #585858;   
    }

    .rodape{
        text-align: center;
        margin-top: 20px;
        text-transform: uppercase;
        
        h3{
            font-weight: 500;
            font-size: 12px;    
        }

        span{
            color: #616060;
            line-height: 2px;
            font-size: 12px; 
        }
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
    
    
}   //desktop
    @media (min-width: 1100px) and (max-width: 1300px){

        margin-right: 0;
        
        p{
            font-size: 12px;
        }

    }
   //tablet
    @media (min-width: 768px) and (max-width: 1100px){

        margin-right: 0;

        p{
            font-size: 8px;
        }      
    }
//moobile
    @media (max-width: 768px){
        margin-right: 0;
        width: 100%;

        p{
            font-size: 10px;
            text-align: center;
        }      
    }

`