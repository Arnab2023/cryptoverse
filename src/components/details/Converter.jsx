/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

const CryptoConverter = ({ name }) => {
  const [cryptoData, setCryptoData] = useState("");
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);
  // const [selectedCrypto, setSelectedCrypto] = useState(name);
  const [selectedCurrency, setSelectedCurrency] = useState("usd");
  const [convertedValue, setConvertedValue] = useState(null);

  useEffect(() => {
    console.log(cryptoData.market_data);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${name}`
        );
        const data = await response.json();
        setCryptoData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleAmountChange = async (event) => {
    setAmount(event.target.value);
    setTotal(
      cryptoData.market_data.current_price[selectedCurrency] *
        event.target.value
    );
  };

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
    setTotal(cryptoData.market_data.current_price[event.target.value] * amount);
  };

  const handleTotalChange = async (event) => {
    setTotal(event.target.value);
    setAmount(
      event.target.value /
        cryptoData.market_data.current_price[selectedCurrency]
    );
  };

  return (
    <>
      {cryptoData && (
        <div className="converter">
          <h1 className="heading">Crypto Converter</h1>
          <div className="inp1">
            <label>
              <input
                readOnly={true}
                type="text"
                value={cryptoData?.symbol.toUpperCase()}
                className="inp2"
              ></input>
              <input
                type="number"
                value={amount}
                className="inp"
                onChange={handleAmountChange}
              />
            </label>
          </div>

          <div className="inp1">
            <label className="inp3">
              <select value={selectedCurrency} onChange={handleCurrencyChange}>
                {Object.entries(cryptoData?.market_data?.current_price).map(
                  ([key, value], index) => {
                    return (
                      <option className="inp2" value={key} key={index}>
                        {key.toUpperCase()}
                      </option>
                    );
                  }
                )}
              </select>
            </label>
            <label>
              <input
                type="number"
                value={total}
                className="inp"
                onChange={handleTotalChange}
              />
            </label>
          </div>
        </div>
      )}
    </>
  );
};

export default CryptoConverter;
