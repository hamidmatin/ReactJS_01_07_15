import * as actionTypes from './action-types'

export const changeMessageAction = () => {
  return { type: actionTypes.CHANGE_MESSAGE};
};

export const changeMessageByPayloadAction = (value) => {
  return { type: actionTypes.CHANGE_MESSAGE_BY_PAYLOAD, payload: value };
};

export const addMessageByPayloadAction = (value) => {
  return { type: actionTypes.ADD_MESSAGE_BY_PAYLOAD, payload: value };
};