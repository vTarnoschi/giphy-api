import React, { useCallback, memo } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";

import Tooltip from "@material-ui/core/Tooltip";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";

import FavoriteIcon from "@material-ui/icons/Favorite";

import { giphySagaActionsCreator } from "../../Sagas/giphySagas";

const style = {
  display: "flex",
  maxWidth: "750px",
  margin: "10px auto",
};

const BuscaGifs = memo(({ history }) => {
  const dispatch = useDispatch();

  const handleOnSearch = useCallback(
    (evt) => {
      const { key } = evt;

      if (key === "Enter") {
        const { giphySaga } = giphySagaActionsCreator();

        const value = document.getElementById("giphy-value").value;

        dispatch(giphySaga(value));

        document.getElementById("giphy-value").value = "";
      }
    },
    [dispatch]
  );

  const pushFavorites = useCallback(() => history.push("/favoritos"), [
    history,
  ]);

  return (
    <div style={style}>
      <TextField
        id="giphy-value"
        label="Nome do Gif"
        onKeyPress={handleOnSearch}
        autoComplete="off"
        fullWidth
      />
      <Tooltip title="Favoritos">
        <IconButton onClick={pushFavorites}>
          <FavoriteIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
});

export default withRouter(BuscaGifs);
