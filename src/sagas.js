import {FETCH_CAT_REQUEST, FETCH_CAT_SUCCESS, FETCH_CAT_FAILURE} from 'actions';
import {call, put, takeEvery, all} from 'redux-saga/effects';
import apiCall from './apiCall';

export function* watcherSaga(){
  yield takeEvery(FETCH_CAT_REQUEST, workerSaga)
}

export function* workerSaga(){
  let response = yield call(apiCall); 
  if (response.ok) {
    yield put({type: FETCH_CAT_SUCCESS, response})
  }
  else {
    yield put({type: FETCH_CAT_FAILURE, response: '404'})
  }
  
}