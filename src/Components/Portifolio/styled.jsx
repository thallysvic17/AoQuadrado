import styled from 'styled-components'

export const Section2 = styled.section`
    width: 100vw;
    background-color: black;
    height: auto;

    
    
    h1{
        color: #fff;
        margin-left: 70px;
        padding-top: 80px;
        padding-bottom: 80px;
        font-weight: 300;
        font-size: 50px;
        text-transform: uppercase;
        letter-spacing: 1px;
    }
//mobile
    @media (max-width:767px){
        h1{
        color: #fff;
        padding-top: 30px;
        padding-bottom:25px;
        margin: 0 auto;
        font-size: 25px;
        text-align: center;
        font-weight: 300;
        text-transform: uppercase;
        letter-spacing: 1px;
    }
    }
  

`

export const Portifolio = styled.div`
    .portifolio {
        display: flex;
        flex-wrap: wrap;
        margin: 0 auto;
        width: 95%;

        
    }
    
    .portfolio-image {
        width: 25%;
        padding: 0 20px;
        margin-bottom: 25px;
        transition: 1s;
        
} 
    .portfolio-image:hover{
        transform: scale(1.1);
        cursor: pointer;
    }
//mobile
    @media (max-width:767px){
        .portifolio {
        display: flex;
        flex-wrap: wrap;
        margin: 0 auto;
        width: 95%;

        
    }
    
    .portfolio-image {
        width: 50%;
        padding: 0 20px;
        margin-bottom: 25px;
        transition: 1s;
        
} 
    .portfolio-image:hover{
        transform: scale(1.1);
        
    }
    }
`
