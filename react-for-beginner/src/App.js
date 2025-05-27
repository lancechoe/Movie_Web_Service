import { useState, useEffect } from "react";

function App() {
  /*TODO*/
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };

  /*Coin*/
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState("");
  const [displayMoney, setDisplayMoney] = useState("");
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  const moneyChange = (event) => setMoney(event.target.value);
  const moneySubmit = (event) => {
    event.preventDefault();
    if (money === "") {
      return;
    }
    setDisplayMoney(money);
    setMoney("");
  };
  return (
    <div>
      <h1>My To Do ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write Your To Do.."
        ></input>
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h1>The Coins {loading ? "" : `(${coins.length})`}</h1>
      <form onSubmit={moneySubmit}>
        <input
          onChange={moneyChange}
          value={money}
          type="text"
          placeholder="How much do you have?"
        ></input>
        <button>Submit</button>
      </form>

      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option>
              {coin.name} ({coin.symbol}) : $ {coin.quotes.USD.price.toFixed(2)}
            </option>
          ))}
        </select>
      )}
      <h4>
        {displayMoney && coins.length > 0 && (
          <>
            You can buy{" "}
            {(
              parseFloat(displayMoney) /
              coins.find((coin) => coin.id === "btc-bitcoin").quotes.USD.price
            ).toFixed(5)}{" "}
            BTC
          </>
        )}
      </h4>
    </div>
  );
}

export default App;
