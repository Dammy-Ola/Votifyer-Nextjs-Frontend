import axios from 'axios'
import {
  USER_VOTE_FAIL,
  USER_VOTE_REQUEST,
  USER_VOTE_SUCESSS,
} from '../constants/voteConstants'

export const voteAction =
  ({
    categoryId: category,
    organizationId: organization,
    nomineeId: nominee,
    eventId: event,
  }) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: USER_VOTE_REQUEST,
      })

      const {
        userLogin: { authUser },
      } = getState()

      console.log(`Bearer ${authUser.jwt}`)

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authUser.jwt}`,
        },
      }

      // const votes = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/categories/${category}`)

      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/votes`,
        JSON.stringify({
          category,
          organization,
          nominee,
          event,
          user: authUser.user.id,
          date: Date.now(),
        }),
        config
      )

      console.log(data)

      dispatch({
        type: USER_VOTE_SUCESSS,
        payload: data,
      })
    } catch (error) {
      console.log(error)
      dispatch({
        type: USER_VOTE_FAIL,
        payload: error.message,
      })
    }
  }
