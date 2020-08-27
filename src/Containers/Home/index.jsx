import React, { useState } from "react";
import { withRouter } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import { giphySagaActionsCreator } from "../../Sagas/giphySagas";
import { useGlobalContext } from "../../Context";

const Home = ({ history }) => {
  const dispatch = useDispatch();

  const { dataSource } = useSelector((state) => state.giphy);

  const {
    state: { favoriteMovies },
    actions: { onSetFavorite },
  } = useGlobalContext();

  const handleOnSearch = () => {
    const { giphySaga } = giphySagaActionsCreator();

    const value = document.getElementById("giphy-value").value;

    dispatch(giphySaga(value));
  };

  const favoritar = (id, url) => {
    let values = [...favoriteMovies];

    if (!favoriteMovies.some((item) => item.id === id)) {
      values = [...values, { id, url }];
    } else {
      values = values.filter((item) => item.id !== id);
    }

    onSetFavorite(values);
  };

  const handleLista = () => {
    history.push("/favoritos");
  };

  return (
    <React.Fragment>
      <div className="App">
        <header className="App-header">
          <p>
            <input id="giphy-value" />
          </p>
          <button onClick={handleLista}>Lista</button>
        </header>

        <button onClick={handleOnSearch}>Search</button>

        <div style={{ margin: "1em", columnCount: 3, columnGap: "1em" }}>
          {dataSource.data &&
            dataSource.data.map((item) => (
              <div
                key={item.id}
                style={{
                  width: "100%",
                  display: "inline-block",
                  padding: "1em",
                  marginBottom: "1em",
                  height: `${item.images.original.height}px`,
                }}
              >
                <img
                  src={item.images.original.url}
                  alt={item.title}
                  style={{ width: "100%", height: "auto" }}
                />
                {/* <div>
                  <button
                    onClick={() => favoritar(item.id, item.images.original.url)}
                  >
                    Favoritar
                  </button>
                </div> */}
              </div>
            ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default withRouter(Home);
