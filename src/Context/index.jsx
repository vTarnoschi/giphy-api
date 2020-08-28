import React, { memo, useMemo, useCallback, useState, useContext } from "react";

const GlobalContext = React.createContext();

const GlobalProvider = memo(({ children }) => {
  const [favoriteGifs, setFavoriteGifs] = useState([]);

  const onRemoveFavorite = useCallback((id) => {
    setFavoriteGifs((state) =>
      state.filter((item) => item.id !== id)
    );
  }, []);

  const onSetFavorite = useCallback((values) => setFavoriteGifs(values), []);

  const provider = useMemo(
    () => ({
      state: { favoriteGifs },
      actions: {
        onRemoveFavorite,
        onSetFavorite,
      },
    }),
    [favoriteGifs, onRemoveFavorite, onSetFavorite]
  );

  return (
    <GlobalContext.Provider value={provider}>{children}</GlobalContext.Provider>
  );
});

export const useGlobalContext = () => useContext(GlobalContext);

export default GlobalProvider;
