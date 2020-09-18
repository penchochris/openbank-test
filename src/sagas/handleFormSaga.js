import { put, takeLatest } from 'redux-saga/effects';
import { TYPES } from 'consts';

import { setStatus, setStep } from 'actions/PasswordManagerActions';

function* onSubmitSaga(action) {
  const { step, status } = action.values;

  yield put(setStatus(status));
  yield put(setStep(step + 1));
}

export const handleFormSaga = [takeLatest(TYPES.ON_SUBMIT_SAGA, onSubmitSaga)];
