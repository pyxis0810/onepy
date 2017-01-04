import { GET_INSTAGRAM, FULFILLED } from 'actions';

export default function user(state = [], action = {}) {
  switch (action.type) {
    case `${GET_INSTAGRAM}${FULFILLED}`:
      return action.payload
    default:
      return state
  }
}
