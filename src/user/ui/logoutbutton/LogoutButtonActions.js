//import { browserHistory } from 'react-router'

export const USER_LOGGED_OUT = 'USER_LOGGED_OUT'
function userLoggedOut(user) {
  return {
    type: USER_LOGGED_OUT,
    payload: user
  }
}

export function logoutUser() {
  return function(dispatch) {
    // Logout user.
    localStorage.removeItem("credentials")
    dispatch(userLoggedOut())

    // Redirect home.
 //   return browserHistory.push('/')
  }
}
