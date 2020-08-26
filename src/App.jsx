import React, { useState } from "react";
import { withRouter } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import { giphySagaActionsCreator } from "./Sagas/giphySagas";

const App = ({ history }) => {
  const dispatch = useDispatch();

  const { dataSource } = useSelector((state) => state.giphy);

  const [favorito, setFavorito] = useState([]);

  const handleOnSearch = () => {
    const { giphySaga } = giphySagaActionsCreator();

    const value = document.getElementById("giphy-value").value;

    dispatch(giphySaga(value));
  };

  const favoritar = (id, url) => {
    let values = [...favorito];

    if (!favorito.some((item) => item.id === id)) {
      values = [...values, { id, url }];
    } else {
      values = values.filter((item) => item.id !== id);
    }

    setFavorito(values);
  };

  const handleLista = () => {
    history.push("/favoritos");
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <input id="giphy-value" />
        </p>
        <button onClick={handleLista}>Lista</button>
      </header>

      <button onClick={handleOnSearch}>Search</button>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {dataSource.data &&
          dataSource.data.map((item) => (
            <div
              key={item.id}
              style={{
                width: `${item.images.original.width}px`,
                height: "auto",
              }}
            >
              <img src={item.images.original.url} alt={item.title} />
              <button
                onClick={() => favoritar(item.id, item.images.original.url)}
              >
                Favoritar
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default withRouter(App);
