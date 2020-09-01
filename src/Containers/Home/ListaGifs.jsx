import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";

import Snackbar from "@material-ui/core/Snackbar";

import { useGlobalContext } from "../../Context";

import Gifs from "../../Components/Gifs";

const style = {
  margin: "1em",
  columnCount: 3,
  columnGap: "1em",
};

const ListaGifs = () => {
  const { dataSource } = useSelector((state) => state.giphy);

  const {
    state: { favoriteGifs },
    actions: { onSetFavorite },
  } = useGlobalContext();

  const [open, setOpen] = useState(false);

  const handleOnSetFavorite = useCallback(
    (id, url, title, height) => {
      let values = [...favoriteGifs];

      if (!favoriteGifs.some((item) => item.id === id)) {
        values = [...values, { id, url, title, height }];
      } else {
        values = values.filter((item) => item.id !== id);
      }

      onSetFavorite(values);
    },
    [onSetFavorite, favoriteGifs]
  );

  const handleOnCopy = useCallback((id) => {
    const imageTag = document.getElementById(`giphy-image-${id}`);

    const textAreaElement = document.createElement("textarea");
    document.body.appendChild(textAreaElement);
    textAreaElement.value = imageTag.src;
    textAreaElement.select();

    document.execCommand("copy");
    document.body.removeChild(textAreaElement);

    setOpen((state) => !state);
  }, []);

  const handleClose = () => setOpen((state) => !state);

  return (
    <React.Fragment>
      <div style={style}>
        {dataSource.data &&
          dataSource.data.map((item) => (
            <Gifs
              key={item.id}
              id={item.id}
              url={item.images.original.url}
              title={item.title}
              height={item.images.original.height}
              onCopy={handleOnCopy}
              isFavorite={favoriteGifs.some(
                (favorite) => favorite.id === item.id
              )}
              setFavorite={handleOnSetFavorite}
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
};

export default ListaGifs;
