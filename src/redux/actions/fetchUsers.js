// Axios
import axios from '../../axios/axios.js'

// Actions Type
import { SET_USERS } from '../actionType/actionType.js'
import { SET_IS_LOADING_FETCH_USERS } from '../actionType/actionType.js'

export const fetchUsers = () => async dispatch => {
  try {
    dispatch({ type: SET_IS_LOADING_FETCH_USERS, data: true })
    const { data } = await axios({
      method: 'GET'
    })
    dispatch({ type: SET_USERS, data: data.results })
    dispatch({ type: SET_IS_LOADING_FETCH_USERS, data: false })
  } catch (err) {
    console.log(err)
  }
}