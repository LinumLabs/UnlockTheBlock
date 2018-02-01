import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { loginUser } from '../../user/ui/loginbutton/LoginButtonActions'

import labels from '../../constants/labels'

import LoginButtonContainer from '../../user/ui/loginbutton/LoginButtonContainer'
import LogoutButtonContainer from '../../user/ui/logoutbutton/LogoutButtonContainer'

class Home extends Component {
    componentWillMount(){
        if (!this.props.profile){
            this.props.loginUser();
        }
    }

    componentWillReceiveProps(nextProps){
        if (!this.props.profile && !nextProps.profile){
            this.props.loginUser();
        }
        else if (!nextProps.profile){
            this.props.loginUser();
        }
    }

    render(){
        var {profile}= this.props;
        const OnlyAuthLinks =

            <div className="center-container" style={{}}>
            <div className="full-height center-container">
            <h1>Welcome {profile ? profile.name : null}</h1>
                <h4>Organisation</h4>
                <Link to="/registerorg" className="btn">{ labels.REGISTER_AS_ORG }</Link>
                <Link to="/verifyclaims" className="btn">{ labels.VERIFY_CLAIMS }</Link>
                <Link to="/viewskills" className="btn">{labels.VIEW_QUALIFICATIONS}</Link>
                <Link to="/addjob" className="btn">Post / Accept Jobs</Link>
                <LogoutButtonContainer />

            </div>
            <div className="full-height center-container">
                <h4>Individual</h4>
                <Link to="/addclaim" className="btn">{ labels.ADD_PROOF_OF_SKILL }</Link>
                <Link to="/viewjobs" className="btn">View Open Jobs</Link>
                <LogoutButtonContainer />

            </div>
            </div>
        return (
        <div className="full-height">
            {this.props.profile ? OnlyAuthLinks : null }
        </div>);
    }
}

const mapStateToProps = state => ({
    profile:state.user.profile
})

const mapDispatchToProps = dispatch => bindActionCreators({
      loginUser
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
