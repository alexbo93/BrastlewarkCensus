import cnst from "../actions/constants";

export default function(state = '', action) {
  switch (action.type) {
    case cnst.SET_SEARCH:
      return action.payload;

  }
  return state;
}
