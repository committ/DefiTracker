import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Coin from './defi';



function App() {

  const [defiCoins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
  
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=decentralized-finance-defi&order=market_cap_desc&per_page=100&page=1&sparkline=false")
    .then(response => {
      setCoins(response.data);
    })
    .catch(error => {
      console.log(error)
    });  
  }, []);

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = defiCoins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase())
    )

  return (
    <div className="defi-app">
      <div className="defi-search">
        <h1 className="defi-text">Search DEX Coins</h1>
        <form>
          <input type="text" placeholder="Search" className="defi-input" onChange={handleChange}/>
        </form>
      </div>
      {filteredCoins.map(defiCoins => {
        return(
          <Coin 
          key={defiCoins.id} 
          name={defiCoins.name} 
          image={defiCoins.image}
          symbol={defiCoins.symbol}
          price={defiCoins.current_price}
          volume={defiCoins.total_volume}
          priceChange={defiCoins.price_change_percentage_24h}
          marketcap={defiCoins.market_cap}
          />
        )
      })}
    </div>
  );
}

export default App;