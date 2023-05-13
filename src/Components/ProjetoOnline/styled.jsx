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
`

export const Content = styled.div`
    
        width: 100%;
        height: 450px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #afaeae;    
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
`