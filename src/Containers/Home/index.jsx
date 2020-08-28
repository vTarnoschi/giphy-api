import React from "react";
import { withRouter } from "react-router";
import { useDispatch } from "react-redux";

import { giphySagaActionsCreator } from "../../Sagas/giphySagas";

import ListaGifs from "./ListaGifs";
import BuscaGifs from "./BuscaGifs";

const Home = ({ history }) => {
  return (
    <React.Fragment>
      <header>
        <BuscaGifs />
      </header>

      <main>
        <ListaGifs />
      </main>
    </React.Fragment>
  );
};

export default withRouter(Home);
