import * as actionTypes from './actionType'

export const loginSuccess = (payload) => ({
  type: actionTypes.LOGIN_SUCCESS,
  payload,
})
