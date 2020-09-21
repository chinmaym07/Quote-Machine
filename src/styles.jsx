import styled from 'styled-components';

export const AppContainer=styled.div`
    width: 100%;
    height: 950px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    transition:all 1200ms ease-out;
    
`
    
  
export const QuoteBox=styled.div`
    padding: 15px;
    background-color: white;
    width: 35%;
    margin:auto;
    border-radius:10px;
    padding:40px 50px;
    display:flex;
    flex-direction:column;
    transition:all 1200ms ease-out;
`;
export const NewQuoteBox=styled.button`
    padding: 10px 15px;
    cursor: pointer;
    color:white;
    width:22%;
    font-size:15px;
    border-radius:8px;
    text-align:center;
    
    margin-right:40px;
    border:none;
    transition:all 1200ms ease-out;
`;