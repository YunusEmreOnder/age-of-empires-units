import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchUnits() {
    const units = yield call([axios, axios.get], 'http://localhost:4000/units')
    yield put({ type: 'GET_UNITS_SUCCESS', payload: units.data })
}
function* fetchUnit(action) {
    const units = yield call([axios, axios.get], 'http://localhost:4000/units')
    yield put({ type: 'SET_UNIT_SUCCESS', payload: units.data.find(e => e.id === Number(action.payload)) })
}

export default function* rootSaga() {
    yield takeLatest('GET_UNITS', fetchUnits)
    yield takeLatest('SET_UNIT', fetchUnit)
}    