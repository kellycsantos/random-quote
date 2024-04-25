import './App.css';
import QuoteCard from './Components/QuoteCard';
import { useState, useEffect } from 'react';
import { baseApi } from './api';


function App() {
  
  function getQuote(){
    fetch(baseApi)
    .then(response => response.json())
    .then(res => {
      console.log(res.slip)
      setQuote(res.slip)
    })
    
  }
  const [quote, setQuote] = useState('')

useEffect(() => {
  getQuote()
}, [])

  return (
    <div className="App">
      <main>
        {
          quote.length === 0 ? 'Estou vazio' :
        <QuoteCard id={quote.id} quote={quote.advice} click={getQuote}/>
        }
      </main>
    </div>
  );
}

export default App;
