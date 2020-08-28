import React, { useCallback, memo, useState } from "react";
import { withRouter } from "react-router";

import Snackbar from "@material-ui/core/Snackbar";

import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import { useGlobalContext } from "../../Context";

import Gifs from "../../Components/Gifs";

const styles = {
  div: {
    margin: "1em",
    columnCount: 3,
    columnGap: "1em",
  },
  divh2: {
    display: "flex",
    maxWidth: "750px",
    margin: "10px auto",
    alignItems: "center",
  },
};

const Favoritos = memo(({ history }) => {
  const {
    state: { favoriteGifs },
    actions: { onRemoveFavorite },
  } = useGlobalContext();

  const [open, setOpen] = useState(false);

  const handleOnRemoveFavorite = useCallback(
    (id) => {
      onRemoveFavorite(id);
    },
    [onRemoveFavorite]
  );

  const handleOnCopy = (id) => {
    const imageTag = document.getElementById(`giphy-image-${id}`);

    const textAreaElement = document.createElement("textarea");
    document.body.appendChild(textAreaElement);
    textAreaElement.value = imageTag.src;
    textAreaElement.select();

    document.execCommand("copy");
    document.body.removeChild(textAreaElement);

    setOpen((state) => !state);
  };

  const pushHome = () => history.push("/");

  const handleClose = () => setOpen((state) => !state);

  return (
    <React.Fragment>
      <div style={styles.divh2}>
        <IconButton onClick={pushHome}>
          <ArrowBackIcon />
        </IconButton>
        <h2>Favoritos</h2>
      </div>
      <div style={styles.div}>
        {favoriteGifs.map((item) => (
          <Gifs
            key={item.id}
            id={item.id}
            url={item.url}
            title={item.title}
            height={item.height}
            onCopy={handleOnCopy}
            isFavorite={favoriteGifs.some(
              (favorite) => favorite.id === item.id
            )}
            setFavorite={() => handleOnRemoveFavorite(item.id)}
          />
        ))}
      </div>

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={1000}
        onClose={handleClose}
        message="Copiado!"
        key="top-center"
      />
    </React.Fragment>
  );
});

export default withRouter(Favoritos);
