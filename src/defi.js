import React from 'react'
import './defi.css'

const coin = ({name, image, symbol, price, volume, priceChange, marketcap}) => {
    return (
        <div className="defi-container">
            <div className="defi-row">
                <div className="defi">
                    <img src={image} alt="crypto"/>
                    <h1>{name}</h1>
                    <p className="defi-symbol">{symbol}</p>
                </div>
                <div className="defi-data">
                    <p className="defi-price">${price}</p>
                    <p className="defi-volume">${volume.toLocaleString()}</p>
                    {priceChange < 0 ? (
                        <p className="defi-percent red">{priceChange.toFixed(2)}%</p>
                    ) : (<p className="defi-percent green">{priceChange.toFixed(2)}%</p>)
                    }
                    <p className="defi-marketcap">
                        Market Cap: ${marketcap.toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default coin