import axios from 'axios'
import slugify from 'slugify'
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCESSS,
  USER_SIGNUP_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCESSS,
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

export const signup =
  ({ name, email, password }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: USER_SIGNUP_REQUEST,
      })

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }

      console.log(
        JSON.stringify({
          name,
          username: slugify(`${name} ${Date.now()}`),
          email,
          password,
        })
      )
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/local/register`,
        JSON.stringify({
          name,
          username: slugify(`${name} ${Date.now()}`),
          email,
          password,
        }),
        config
      )

      console.log(data)

      dispatch({
        type: USER_SIGNUP_SUCESSS,
        payload: data,
      })

      // // Logging in the user automatically
      dispatch({
        type: USER_LOGIN_SUCESSS,
        payload: data,
      })

      localStorage.setItem('authUser', JSON.stringify(data))
    } catch (error) {
      dispatch({
        type: USER_SIGNUP_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }
