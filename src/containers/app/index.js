import React from 'react';
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import AddClaim from '../add-claim'
import RegisterOrg from '../register-org'
import VerifyClaims from '../verify-claims'
import ViewSkills from '../view-skills'
import ViewJobs from '../view-jobs'
import AddJob from '../add-job'
import LoginButtonContainer from '../../user/ui/loginbutton/LoginButtonContainer'
import LogoutButtonContainer from '../../user/ui/logoutbutton/LogoutButtonContainer'

import '../../css/oswald.css'
import '../../css/open-sans.css'
import '../../css/pure-min.css'
import './App.css'

const App = (props) => (
    <div className="full-height">
      <Route exact path="/" component={Home} />
      <Route exact path="/addclaim" component={AddClaim} />
      <Route exact path="/registerorg" component={RegisterOrg} />
      <Route exact path="/verifyclaims" component={VerifyClaims} />
      <Route exact path="/viewskills" component={ViewSkills} />
      <Route exact path="/viewjobs" component={ViewJobs} />
      <Route exact path="/addjob" component={AddJob} />
    </div>
)

export default App
