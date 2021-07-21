import axios from 'axios'
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCESSS,
} from '../constants/authConstants'

export const loginAction =
  ({ email: identifier, password }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: USER_LOGIN_REQUEST,
      })

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }

      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/local`,
        JSON.stringify({ identifier, password }),
        config
      )

      console.log(data)

      dispatch({
        type: USER_LOGIN_SUCESSS,
        payload: data,
      })

      localStorage.setItem('authUser', JSON.stringify(data))
    } catch (error) {
      console.log(error)
      dispatch({
        type: USER_LOGIN_FAIL,
        payload: error.message,
      })
    }
  }
