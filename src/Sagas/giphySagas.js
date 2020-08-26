import { call, put, takeLatest } from "redux-saga/effects";

import { giphyActionsCreator } from "../Redux/giphyReducer";

import GiphySerice from "../Services/GiphySerice";

const sagaTypes = {
  GIPHY: "GIPHY_SAGA",
};

function* searchGiphy(payload) {
  yield put(giphyActionsCreator().giphyRequest());

  try {
    const result = yield call(GiphySerice.searchGiphy, payload);

    yield put(giphyActionsCreator().giphySuccess(result));
  } catch (error) {
    yield put(giphyActionsCreator().giphyError(error));
  }
}

export function giphySagaActionsCreator() {
  return {
    giphySaga: (payload) => ({
      type: sagaTypes.GIPHY,
      payload,
    }),
  };
}

export default function* giphySagas() {
  yield takeLatest(sagaTypes.GIPHY, searchGiphy);
}
