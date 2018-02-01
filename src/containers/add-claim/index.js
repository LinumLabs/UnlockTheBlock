import React, {Component} from 'react';
import { connect } from 'react-redux'
import { getOrganisations, addClaim } from '../../modules/claims';
import { bindActionCreators } from 'redux'
import {Redirect} from 'react-router-dom';
import labels from '../../constants/labels';
import { RingLoader } from 'react-spinners';
import {Link} from 'react-router-dom'

class AddClaim extends Component{

  constructor(props){
    super(props);

    this.state = {
        uportId : props.profile ? props.profile.address : "",
        claimantName: props.profile ? props.profile.name : "",
        name : "",
        orgAddress : ""
    };

  }

    componentWillMount(){
        this.props.getOrganisations();
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

  submit(){
      var { uportId, name, orgAddress} = this.state;

      if (!orgAddress){
          alert("Please select an organisation address");
          return;
      }

      if (!name){
          alert("Please select a name");
          return;
      }

      this.props.addClaim(name,this.state.claimantName, orgAddress, true, uportId);
  }

  render(){
      var a = this.props;

      if (!this.props.profile) {
          return (<Redirect to={{
              pathname: '/',
              state: { from: this.props.location }
          }}/>);
      }
      else if (this.props.claims.loading || !this.props.claims.organisations){
          return (<div className="full-height center-container">
              <RingLoader
                  color={'#000000'}
                  loading={this.props.claims.loading}
              />

              Please wait while we are retrieving the organisations.
          </div>);

      } else if (this.props.claims.addingClaim){
          return (<div className="full-height center-container">
              <RingLoader
                  color={'#000000'}
                  loading={true}
              />

              Busy Adding Qualification. Please accept in your browser wallet to confirm transaction. Please be patient, this can take up to a minute after you've accepted.
          </div>);
      } else if (this.props.claims.claimAddedResult){
          return (<div className="full-height center-container">

              Claim Added. Please see <a target="_blank" href={ "https://rinkeby.etherscan.io/tx/" + this.props.claims.claimAddedResult.transactionHash }>here</a> for transaction.
          </div>);
      }else if (this.props.claims.organisations){
          return (
              <div className="full-height center-container">
               { <button style={{position:"absolute", left:"0", top: "15px"}}><Link to="/">Back</Link></button> }
                  <form className="contact100-form validate-form">
                      <div className="wrap-input100 validate-input">
                          <span className="label-input100">{labels.SELECT_ORGANISATION}</span>
                          <select name="orgAddress" onChange={(e) => this.setInputValue(e)} value={this.state.orgAddress}>
                              <option value="">Please select </option>
                              {this.props.claims.organisations.map(o => <option key={o.orgAddress+o.name} value={o.orgAddress}>{o.name}</option>)}
                          </select>
                      </div>

                      <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                          <span className="label-input100">{labels.ENTER_CLAIM}</span>
                          <input onChange={(e) => this.setInputValue(e)} className="input100" type="text" name="name" placeholder={labels.ENTER_CLAIM_PLACEHOLDER}/>
                          <span className="focus-input100"></span>
                      </div>

                      <div className="container-contact100-form-btn">
                          <button onClick={(e) => {e.preventDefault(); this.submit(); }} className="contact100-form-btn">
						                  <span>
							                    {labels.SUBMIT_PROOF_OF_SKILL}
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
    claims:state.claims
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getOrganisations,
    addClaim
    },dispatch);

const AddClaimContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddClaim);

export default AddClaimContainer;
