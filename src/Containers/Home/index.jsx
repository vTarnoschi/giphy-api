import React from "react";

import ListaGifs from "./ListaGifs";
import BuscaGifs from "./BuscaGifs";

const Home = () => {
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

export default Home;
