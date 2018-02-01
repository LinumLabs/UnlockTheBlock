import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import user from './user'
import registerOrganisation from './register-organisation'
import claims from './claims'
import verifyClaims from './verify-claims'
import viewSkills from './view-skills'
import jobOffers from './job-offers'

export default combineReducers({
  router: routerReducer,
  user,
  registerOrganisation,
  claims,
  verifyClaims,
  viewSkills,
  jobOffers
})
