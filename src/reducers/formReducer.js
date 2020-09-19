import { TYPES } from 'consts';

const initialState = {
  step: 2,
  status: 0,
};

export const formReducer = (state = initialState, action) => {
  const states = {
    [TYPES.SET_STEP]: { ...state, step: action.step },
    [TYPES.SET_STATUS]: { ...state, status: action.status },
  };

  return states[action.type] || state;
};
