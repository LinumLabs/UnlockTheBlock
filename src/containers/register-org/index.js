import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { registerOrg } from '../../modules/register-organisation';

import labels from '../../constants/labels'

import './form.css'

class RegisterOrg extends Component {

  constructor(props){
    super(props)
    this.state = {
      name:"",
      regNumber:"",
      uportId: props.profile ? props.profile.address : "",
    };
  }

  setInputValue(event){
    event.preventDefault();

    const target = event.target;
    const type = target.type;
    const value = target.value;

    const name = target.name;

    var newState = {...this.state};

    newState[name] = type == "number" ? Number(value) : value;

    this.setState(newState);
  }

  registerOrg(){
    this.props.registerOrg(this.state.uportId, this.state.name, this.state.regNumber);
  }

  render(){
      if (this.props.registerOrganisation.busy){
          return (<div className="center-container full-height">Please accept or decline transaction in your web provider.</div>);
      }else if (this.props.registerOrganisation.txid){
          return (
              <div className="center-container full-height">
                  Your transaction has been submitted to the network. View it <a target="_blank" href={ "https://rinkeby.etherscan.io/tx/" + this.props.registerOrganisation.txid }>here.</a>
              </div>);

      }else{
          return (
              <div className="contact-reg center-container full-height">
               { <button style={{position:"absolute", left:"0", top: "15px"}}><Link to="/">Back</Link></button> }
                  <form className="contact100-form validate-form">
                      <div className="wrap-input100 validate-input" data-validate="Name is required">
                          <span className="label-input100">{labels.ENTER_ORG_NAME}</span>
                          <input onChange={(e) => this.setInputValue(e)} className="input100" type="text" name="name" placeholder={labels.ENTER_ORG_NAME_PLACEHOLDER}/>
                          <span className="focus-input100"></span>
                      </div>

                      <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                          <span className="label-input100">{labels.ENTER_REGNO}</span>
                          <input onChange={(e) => this.setInputValue(e)} className="input100" type="text" name="email" placeholder={labels.ENTER_REGNO_PLACEHOLDER}/>
                          <span className="focus-input100"></span>
                      </div>

                      <div className="container-contact100-form-btn">
                          <button onClick={(e) => {e.preventDefault(); this.registerOrg(); }} className="contact100-form-btn">
						                  <span>
							                    {labels.REGISTER_AS_ORG}
							                    <i className="fa fa-long-arrow-right m-l-7" aria-hidden="true"></i>
						                  </span>
					                </button>
				              </div>
			            </form>
              </div>
          );
      }


  }
}

const mapStateToProps = state => ({
    profile:state.user.profile,
    registerOrganisation:state.registerOrganisation
});

const mapDispatchToProps = dispatch => bindActionCreators({
  registerOrg
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterOrg);
