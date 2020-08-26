import { all, fork } from "redux-saga/effects";

import giphySaga from "./giphySagas";

export default function* rootSagas() {
  yield all([fork(giphySaga)]);
}
