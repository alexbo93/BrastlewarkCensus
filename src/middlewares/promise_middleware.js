function isPromise(payload) {
  return payload instanceof Promise;
}

/**
 * Middleware to manage actions that contain Promises as payload
 * Would replace redux-promise middleware
 * @param Obj {Store}
 * @param Obj {next}
 * @param Obj {action}
 * @retuns {function}
 */
export default store => next => action => {
  return isPromise(action.payload)
  ? action.payload.then(
    (data) => store.dispatch({type: action.type, payload: JSON.parse(data.responseText)}),
    (error) => store.dispatch({type: action.type, payload: error.responseText})
    // (error) => store.dispatch({type: action.type, payload: error})
  )
  : next(action)
}
