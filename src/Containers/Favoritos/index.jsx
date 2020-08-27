import React from "react";
import { withRouter } from "react-router";
import { useGlobalContext } from "../../Context";

const Favoritos = () => {
  const {
    state: { favoriteMovies },
  } = useGlobalContext();

  console.log(favoriteMovies);

  return favoriteMovies.map((item) => (
    <div key={item.id}>
      <img src={item.url} alt="" />
    </div>
  ));
};

export default withRouter(Favoritos);
