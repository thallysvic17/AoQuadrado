import styled from 'styled-components'

export const Section3 = styled.section`
    height: auto;
    width: 100%;

    h1{
        color: #000;
        margin-left: 70px;
        padding-top: 80px;
        padding-bottom:60px;
        font-weight: 300;
        font-size: 50px;
        text-transform: uppercase;
        letter-spacing: 1px;
    }
//mobile
    @media (max-width:767px){
        h1{
        color: #000;
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

export const Content = styled.div`
    
        width: 100%;
        height: 450px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #afaeae;    

        @media (max-width:767px){
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border-bottom: 1px solid #afaeae; 
        }
`



export const PctCards = styled.div`
    width: 30%;
    height: 450px;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    row-gap: 2px;
    margin-top: 50px;
      
    h2{
        margin-bottom: 30px;
        text-transform: uppercase;
        font-weight: 400;
        font-size: 28px;
    }

    h2:hover{
        color:#464545;
        cursor: pointer;
    }

    p{
        font-size: 15px;
        cursor: default; 
    }
//mobile
    @media (max-width:767px){
        width: 100%;
        height: auto;
        text-align: center;
        display: flex;
        align-items: center;
        flex-direction: column;
        row-gap: 2px;
        margin-top: 25px;
        margin-bottom: 25px;
        
        h2{
            margin-bottom: 25px;
            text-transform: uppercase;
            font-weight: 300;
            font-size: 20px;
        }

        h2:hover{
            cursor: default;
        }

        p{
            font-size: 13px;
            cursor: default; 
        }

        }
`