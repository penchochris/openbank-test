import { TYPES } from 'consts';

export const setStep = step => ({ type: TYPES.SET_STEP, step });
export const setStatus = status => ({ type: TYPES.SET_STATUS, status });
export const onSubmitSaga = values => ({ type: TYPES.ON_SUBMIT_SAGA, values });
