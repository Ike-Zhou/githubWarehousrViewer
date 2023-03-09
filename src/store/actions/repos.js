import * as actionTypes from './actionType'

export const getReposSuccess = (payload) => ({
  type: actionTypes.GETREPOS_SUCCESS,
  payload,
})
