const types = {
  REQUEST: "GIPHY_REQUEST",
  SUCCESS: "GIPHY_SUCCESS",
  ERROR: "GIPHY_ERROR",
};

const initialState = {
  loading: false,
  error: "",
  dataSource: {},
};

export default function giphyReducer(state = initialState, action) {
  switch (action.type) {
    case types.REQUEST:
      return { ...state, loading: true };
    case types.SUCCESS:
      return { ...state, loading: false, dataSource: action.payload };
    case types.ERROR:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
}

export function giphyActionsCreator() {
  return {
    giphyRequest: () => ({
      type: types.REQUEST,
    }),
    giphySuccess: (payload) => ({
      type: types.SUCCESS,
      payload,
    }),
    giphyError: (error) => ({
      types: types.ERROR,
      error,
    }),
  };
}
