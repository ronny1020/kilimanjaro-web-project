import { GET_MEMBER_INFO } from '../actions/actionTypes'

const initialState = {
  member: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MEMBER_INFO:
      return {
        ...state,
        member: action.payload,
      }
    default:
      return state
  }
}
