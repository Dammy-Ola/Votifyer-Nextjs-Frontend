import {
  USER_VOTE_FAIL,
  USER_VOTE_REQUEST,
  USER_VOTE_SUCESSS,
} from '../constants/voteConstants'

export const userVoteReducer = (state = [], action) => {
  switch (action.type) {
    case USER_VOTE_REQUEST:
      return { loading: true }
    case USER_VOTE_SUCESSS:
      return { loading: false, userVote: action.payload }
    case USER_VOTE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
