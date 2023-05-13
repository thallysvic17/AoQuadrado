import styled from 'styled-components'


 export const CarouselContainer = styled.section`
    width: 100% ;
    height:auto;
    overflow: hidden;
    margin-bottom: 100px;
    
   
    .slides{
        width: 100%;
        height: 600px;
        position: relative;
        

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        
    }
//mobile
    @media (max-width:767px){
        width: 100% ;
        height:auto;
        margin-bottom: 40px;
        
    
   
    .slides{
        width: 100%;
        height: auto;
        position: relative;
        background-size: cover;
        

        img{
            width: 100%;
            height: 100%;
            object-fit: contain;
            
        }
        
    }
    }
`

 
