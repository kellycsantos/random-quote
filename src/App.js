import './App.css';
import QuoteCard from './Components/QuoteCard';
import Loading from './Components/Loading';
import { useState, useEffect } from 'react';
import { baseApi } from './api';
import axios from 'axios'


function App() {

  function getQuote() {
    setLoading(true)
    axios
      .get(baseApi)
      .then((response) => {
        setQuote(response.data.slip)
        setLoading(false)
      })
      .catch()
      .finally()
  }
  const [quote, setQuote] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    getQuote()
  }, [])

  return (
    <div className="App">
      <main>
        {
          loading ?
            <Loading /> :
            <QuoteCard id={quote.id} quote={quote.advice} click={getQuote} />
        }
      </main>

    </div>
  );
}

export default App;
