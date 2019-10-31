import { call, put, takeLatest } from 'redux-saga/effects';
import {getList} from '../Apis/api'
import {
  GET_LIST_DATA_REQUEST, 
  getSuccess,
  getError
} from './action';


export function* getPoc() {

  const response = yield getList('http://www.mocky.io/v2/5dba993b3000007400028fd7');
  
  if(response.status === 200){
    // const successResponse = yield call([response, response.data]);
    yield put(getSuccess(response.data));
    return;
  

  }
  const errorResponse = yield call([response, response.json]);
  yield put(getError(errorResponse))
}

export default function* pocSaga() {
  yield takeLatest(GET_LIST_DATA_REQUEST, getPoc);
}