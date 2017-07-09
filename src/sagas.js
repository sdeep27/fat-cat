import {FETCH_CATS_REQUEST, FETCH_CATS_SUCCESS, FETCH_CATS_FAILURE} from './actions';
import {call, put, takeEvery, all} from 'redux-saga/effects';


function statusCheck(res){
  if(res.status >= 200 && res.status < 300){
    return Promise.resolve(res)
  } else {
    return Promise.reject({err: 'Bad Status Code'})
  }
}
function apiCall() {
  return fetch('https://api.giphy.com/v1/gifs/search?q=fat+cat&api_key=dc6zaTOxFJmzC')
  .then(res => statusCheck(res))
  .catch(err => ({ err }))
  .then(raw => raw.json())
  .then(response => ({ response }))
  .catch(err => ({ err }))
}

function* workerSaga(){
  let { response, err } = yield call(apiCall);
  if(response){
    yield put({type: FETCH_CATS_SUCCESS, response });
  } else {
    yield put({type: FETCH_CATS_FAILURE, err });
  }
}

export function* watcherSaga(){
  yield takeEvery(FETCH_CATS_REQUEST, workerSaga)
}