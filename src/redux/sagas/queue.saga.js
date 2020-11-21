import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//linked to requests by event

function* getByEventID(action) {
  let response = yield axios.get(`/api/request/event/${action.payload}`);
  yield put({
    type: 'REQUEST_BY_EVENT',
    payload: response.data,
  });
}

//complete requests
function* completeQueue(action) {
  yield axios({
    method: 'PUT',
    url: action.url,
  });
  let response = yield axios.get(`/api/request/event/${action.payload}`);
  yield put({
    type: 'REQUEST_BY_EVENT',
    payload: response.data,
  });
}

//delete specific event
function* deleteQueue(action) {
  yield axios({
    method: 'DELETE',
    url: action.url,
  });
  let response = yield axios.get(`/api/request/event/${action.payload}`);
  yield put({
    type: 'REQUEST_BY_EVENT',
    payload: response.data,
  });
}

function* queueSaga() {
  yield takeLatest('FETCH_BY_EVENT', getByEventID);
  yield takeLatest('COMPLETE_QUEUE', completeQueue);
  yield takeLatest('DELETE_QUEUE', deleteQueue);
}

export default queueSaga;
