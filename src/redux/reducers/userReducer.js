// Action Type
import { SET_USER, SET_USERS } from '../actionType/actionType.js'
import { SET_IS_LOADING_FETCH_USERS } from '../actionType/actionType.js'
import { SET_IS_SHOW_USER_DETAIL } from '../actionType/actionType.js'

const initialState = {
  users: [],
  user: {},
  isShowUserDetail: false,
  isLoadingFetchUsers: false
}

export const userReducer = (state = initialState, action) => {
  if (action.type === SET_USERS) {
    return {
      ...state,
      users: action.data
    }
  }
  if (action.type === SET_USER) {
    return {
      ...state,
      user: action.data
    }
  }
  if (action.type === SET_IS_SHOW_USER_DETAIL) {
    return {
      ...state,
      isShowUserDetail: action.data
    }
  }
  if (action.type === SET_IS_LOADING_FETCH_USERS) {
    return {
      ...state,
      isLoadingFetchUsers: action.data
    }
  }
  return state
}