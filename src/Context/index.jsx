import React, { memo, useMemo, useCallback, useState, useContext } from "react";

const GlobalContext = React.createContext();

const GlobalProvider = memo(({ children }) => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  const onRemoveFavorite = useCallback((movieId) => {
    setFavoriteMovies((state) =>
      state.filter((item) => item.movieId !== movieId)
    );
  }, []);

  const onSetFavorite = useCallback((values) => setFavoriteMovies(values), []);

  const provider = useMemo(
    () => ({
      state: { favoriteMovies },
      actions: {
        onRemoveFavorite,
        onSetFavorite,
      },
    }),
    [favoriteMovies, onRemoveFavorite, onSetFavorite]
  );

  return (
    <GlobalContext.Provider value={provider}>{children}</GlobalContext.Provider>
  );
});

export const useGlobalContext = () => useContext(GlobalContext);

export default GlobalProvider;
