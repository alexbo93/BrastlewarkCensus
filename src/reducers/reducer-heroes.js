import cnst from "../actions/constants";

export default function(state = {}, action) {
  switch (action.type) {
    case cnst.FETCH_HEROES:
      return action.payload;
  
  }
  return state;
}
