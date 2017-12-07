import cnst from './constants';
import Utils from '../utils/index';

export function fetchHeroes() {
  // Returns a promise that should be used to show loading element
  const request = Utils.AjaxHTTPRequest(cnst.ROOT_URL);

  return {
    type: cnst.FETCH_HEROES,
    payload: request
  }
}

export function setSearch(search) {
  // Need to create a method to get the list of displayed from
  // original heroes list
  return {
    type: cnst.SET_SEARCH,
    payload: search
  }
}
