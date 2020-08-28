import React, { memo, useCallback } from "react";

import Card from "@material-ui/core/Card";
import ShareIcon from "@material-ui/icons/Share";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CardActions from "@material-ui/core/CardActions";

import GifsStyle from "./styles";

const ListaGifs = memo(
  ({ id, url, title, height, isFavorite, setFavorite, onCopy }) => {
    const handleOnSetFavorite = useCallback(() => {
      if (setFavorite) setFavorite(id, url, title, height);
    }, [id, url, setFavorite, title, height]);

    const getFavoriteColor = useCallback(() => {
      if (isFavorite) return { fill: "red" };

      return {};
    }, [isFavorite]);

    const handleOnCopy = useCallback(() => {
      if (onCopy) onCopy(id);
    }, [onCopy, id]);

    return (
      <GifsStyle styles={{ height }}>
        <Card>
          <img
            id={`giphy-image-${id}`}
            src={url}
            alt={title}
            style={{ width: "100%", height: "auto" }}
          />
          <CardActions disableSpacing>
            <IconButton
              aria-label="add to favorites"
              onClick={handleOnSetFavorite}
            >
              <FavoriteIcon style={getFavoriteColor()} />
            </IconButton>
            <IconButton aria-label="share" onClick={handleOnCopy}>
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </GifsStyle>
    );
  }
);

export default ListaGifs;
