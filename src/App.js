import React from 'react';
import Qoutes_Data from './Quotes.data';
import './App.css';
import {
  AppContainer,
  QuoteBox,
  NewQuoteBox,
} from './styles';

const quotes = Qoutes_Data;
const color = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      presentQuote:quotes[0],
      presentColor:color[0]
    }
  }
  handleClick = () => {
    this.setState({presentQuote:quotes[Math.floor(Math.random()*(quotes.length))] , presentColor:color[Math.floor(Math.random()*(color.length))]});
  }
  render(){
    const quote = this.state.presentQuote;
    const color = this.state.presentColor;
    return (
      <AppContainer style={{backgroundColor:color}}>
        {
          <QuoteBox style={{color:color,border:`1px solid ${color}`}}>
            <h1 style={{color:color}} className="heading-1">Quote Of The Day</h1>
            <p className="text"><i className="fa fa-quote-left"></i>  {quote.quote}</p>
            <p className="author">-{quote.author}</p>
            <div className="buttons">
              <a className="tweet" style={{backgroundColor:color}} href="https://twitter.com/"><span className="fa fa-twitter"></span></a>
              <NewQuoteBox style={{backgroundColor:color}}  onClick={this.handleClick}>New Quote</NewQuoteBox>

            </div>
            
          </QuoteBox>
        }
        
      </AppContainer>
    );
  }
}

export default App;
