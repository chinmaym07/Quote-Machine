import styled from 'styled-components';

export const AppContainer=styled.div`
    width: 100%;
    height: 975px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    transition:all 1200ms ease-out;
`
    
  
export const QuoteBox=styled.div`
    background-color: white;
    width: 40%;
    margin:auto;
    border-radius:10px;
    padding:20px 20px;
    display:flex;
    flex-direction:column;
    transition:all 1200ms ease-out;
    
    @media (min-width:751px) and (max-width:1100px){
        width:55%;
    }
     
    @media (min-width:550px) and (max-width:750px){
        width:60%;
    }
    @media (max-width:549px){
        width:75%;
    }
`;
export const NewQuoteBox=styled.button`
    padding: 10px 15px;
    cursor: pointer;
    color:white;
    width:25%;
    font-size:17px;
    border-radius:8px;
    text-align:center;
    border:none;
    transition:all 1200ms ease-out;
    &.hover
    {
        background-color:white;
        
    }
    @media (min-width:700px) and (max-width:1100px){
        width:25%;

    }
`;