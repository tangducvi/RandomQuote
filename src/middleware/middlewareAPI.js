import {isPromise} from "../utils/typeof";

const middlewareAPI = () => next => action => {
  const { payload } = action || {};
  if(isPromise(payload)) {
    payload.then(res => {
      next({
        ...action,
        payload: res?.data
      })
    }).catch(e => {
      console.log(e);
    })
    return;
  }
  return next(action)
}

export default middlewareAPI;