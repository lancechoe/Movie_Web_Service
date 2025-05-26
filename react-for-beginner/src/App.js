import { useState, useEffect } from "react";

function Hello() {
  function byFn() {
    console.log("bye :(");
  }
  function hiFn() {
    console.log("created :)");
    return byFn;
  }
  useEffect(hiFn, []);
  return <h1>Hello</h1>;
}

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState(false);

  const onClick = () => setValue((count) => count + 1);
  const onChange = (event) => setKeyword(event.target.value);
  const clickEvent = () => setShowing((prev) => !prev);

  console.log("I run all the time");
  useEffect(() => {
    console.log("I run only once");
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("I run when 'keyword' changes.");
    }
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>Click</button>
      <button onClick={clickEvent}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
