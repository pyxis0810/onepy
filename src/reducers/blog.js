import { GET_BLOG, FULFILLED } from 'actions';

export default function user(state = '', action = {}) {
  switch (action.type) {
    case `${GET_BLOG}${FULFILLED}`:
      return action.payload
    default:
      return state
  }
}
