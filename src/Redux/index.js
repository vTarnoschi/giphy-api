import { combineReducers } from "redux";

import giphyReducers from "./giphyReducer";

export default combineReducers({
  giphy: giphyReducers,
});
