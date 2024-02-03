import { useState } from "react";
import reviews from "./data";
import Card from "./Card";
function App() {
  const [count, setCount] = useState(0);
  const [randomNumber, setRandomNumber] = useState(null);
  const revLength = reviews.length - 1;
  const forward = () => {
    if (count >= revLength) {
      setCount(() => 0);
    } else {
      setCount((curr) => curr + 1);
    }
  };

  const backward = () => {
    if (count <= 0) {
      setCount(() => revLength);
    } else {
      setCount((curr) => curr - 1);
    }
  };

  const random = () => {
    const ranNum = Math.floor(Math.random() * reviews.length);
    setCount(ranNum);
  };
  return (
    <main>
      <Card
        forward={forward}
        backward={backward}
        random={random}
        {...reviews[count]}
      />
    </main>
  );
}

export default App;
