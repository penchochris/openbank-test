import { all } from 'redux-saga/effects';

import { handleFormSaga } from './handleFormSaga';

function* sagas () {
  yield all([
    ...handleFormSaga,
  ]);
}

export default sagas;