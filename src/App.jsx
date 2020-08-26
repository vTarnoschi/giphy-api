import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { giphySagaActionsCreator } from "./Sagas/giphySagas";

function App() {
  const dispatch = useDispatch();

  const state = useSelector((state) => state.giphy);

  const handleOnSearch = () => {
    const { giphySaga } = giphySagaActionsCreator();

    const value = document.getElementById("giphy-value").value;

    dispatch(giphySaga(value));
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <input id="giphy-value" />
        </p>
      </header>

      <button onClick={handleOnSearch}>Search</button>
    </div>
  );
}

export default App;
