const initialState = {
  profile: null,
  orgUser: false,
  normalUser: false
}

const user = (state = initialState, action) => {
  if (action.type === "SET_USER_AS_ORG"){
    return {...state, orgUser: true};
  }
  if (action.type === 'USER_LOGGED_IN')
  {
    return Object.assign({}, state, {
      profile: action.payload
    })
  }

  if (action.type === 'USER_LOGGED_OUT')
  {
    return Object.assign({}, state, {
      profile: null
    })
  }

  return state
}

export default user
