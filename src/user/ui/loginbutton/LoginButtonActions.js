import { uport } from './../../../util/connectors.js'
import { BrowserRouter } from 'react-router-dom'

export const USER_LOGGED_IN = 'USER_LOGGED_IN'

function userLoggedIn(user) {
  return {
    type: USER_LOGGED_IN,
    payload: user
  }
}

export function loginUser() {
  return async function(dispatch) {
    // UPort and its web3 instance are defined in ./../../../util/wrappers.
    // Request uPort persona of account passed via QR
    try{
      var credentials;

      //move this check to something more convenient

      if (localStorage['credentials']){
        var creds = localStorage['credentials'];
        console.log('c', creds);
        credentials = JSON.parse(creds);
      } else {
        credentials = await uport.requestCredentials({
          requested: ['name', 'avatar', 'phone', 'country'],
        });

        localStorage.setItem('credentials', JSON.stringify(credentials));
      }

      //TODO: expire JWT
      console.log('credentails', credentials);

      dispatch(userLoggedIn(credentials))

      // Used a manual redirect here as opposed to a wrapper.
      // This way, once logged in a user can still access the home page.
      //var currentLocation = BrowserRouter.getCurrentLocation()

      //if ('redirect' in currentLocation.query)
      //{
        //return BrowserRouter.push(decodeURIComponent(currentLocation.query.redirect))
      //}

      //return BrowserRouter.push('/dashboard')


    }catch(e){
      console.log('credentials issue', e);
    }

  }
}
