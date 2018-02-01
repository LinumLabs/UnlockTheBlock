import React, {Component} from 'react';
import { connect } from 'react-redux'
import { finishJob, acceptJob, addJob, getMyJobOffers, clear } from '../../modules/job-offers';
import { bindActionCreators } from 'redux'
import {Redirect} from 'react-router-dom';
import labels from '../../constants/labels';
import { RingLoader } from 'react-spinners';
import { Link } from 'react-router-dom'
import moment from 'moment';

class AddJob extends Component{

  constructor(props){
    super(props);

    this.state = {
        uportId : props.profile ? props.profile.address : "",
        providerName: props.profile ? props.profile.name : "",
        title : "",
        description : "",
        paymentAmount: 0
    };
  }

    componentWillMount(){
        this.props.getMyJobOffers();
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
      var { name, title, description, providerName, paymentAmount, uportId} = this.state;

      this.props.addJob(this.state.title,this.state.description, this.state.providerName, this.state.paymentAmount, uportId);
  }

    finishJob(id){
      this.props.finishJob(id);
    }
    accept(id, paymentAmount){
      this.props.acceptJob(id, paymentAmount);
    }

  render(){
      if (!this.props.profile) {
          return (<Redirect to={{
              pathname: '/',
              state: { from: this.props.location }
          }}/>);
      }
      else if (this.props.jobOffers.gettingJobOffers){
          return (<div className="full-height center-container">
              <RingLoader
                  color={'#000000'}
                  loading={this.props.jobOffers.gettingJobOffers}
              />
              Please wait while we are retrieving your current job offers
          </div>);

      }
      else if (this.props.jobOffers.busy){
          return (<div className="full-height center-container">
              <RingLoader
                  color={'#000000'}
                  loading={true}
              />

              Please accept in your browser wallet to add job offer.<br/>
              Please be patient, this can take up to a minute after you've accepted.
          </div>);
      } else if (this.props.jobOffers.submittedJobResult){
          return (<div className="full-height center-container">
              Job Offer Added, it can take up to a minute to show and we will refresh once it's available. Please click below to see transaction or clear to view your jobs.
              <button onClick={(e) => {e.preventDefault(); this.props.clear(); this.props.getMyJobOffers();}}>Clear</button>

<a target="_blank" href={ "https://rinkeby.etherscan.io/tx/" + this.props.jobOffers.submittedJobResult }>View Transaction</a> 
          </div>);
      }else {//if (this.props.claims.organisations){
          return (
              <div style={{display:"flex", flexDirection:"column", justifyContent:"flex-start"}} className="full-height center-container">
                  <h3>Submit New Job</h3>
                  <form style={{ marginBottom:"20px",width:"50%" }} className="validate-form">
                      <div className="wrap-input100 validate-input">
                          <span className="label-input100">Job Title</span>
                          <input onChange={(e) => this.setInputValue(e)} className="input100" type="text" name="title" placeholder="Enter Job Title"/>
                          <span className="focus-input100"></span>
                      </div>

                      <div className="wrap-input100 validate-input">
                          <span className="label-input100">Job Description</span>
                          <textarea onChange={(e) => this.setInputValue(e)} className="input100" type="text" name="description" placeholder="Enter Job Description"/>
                          <span className="focus-input100"></span>
                      </div>

                      <div className="wrap-input100 validate-input">
                          <span className="label-input100">Payment Amount</span>
                          <input onChange={(e) => this.setInputValue(e)} className="input100" type="number" name="paymentAmount" placeholder="Enter Payment Amount (in Ether)"/>
                          <span className="focus-input100"></span>
                      </div>

                      <div className="container-contact100-form-btn">
                          <button onClick={(e) => {e.preventDefault(); this.submit(); }} className="contact100-form-btn">
						                  <span>
							                    Submit Job
						                  </span>
					                </button>
				              </div>
			            </form>


                  <h3>Existing Jobs</h3>
                  <div className="claimsTable">
                      <div className="claimsRow">
                          <div>
                              Job Title
                          </div>
                          <div>
                              Amount (Ether)
                          </div>
                          <div>
                              Created At
                          </div>
                          <div>
                              Interested Party
                          </div>
                          <div>
                              Accept Offer
                          </div>
                          <div>
                              Complete Job
                          </div>
                          <div>
                              Status
                          </div>
                      </div>
                      {
                          this.props.jobOffers.myJobOffers.map(j =>
                              <div key={j.title+j.created} className="claimsRow">
                                  <div>{ j.title }</div>
                                  <div>{ Number(j.paymentAmount).toFixed(6)}</div>
                                  <div>{ moment(new Date(j.created * 1000)).format("YYYY/MM/DD HH:mm") }</div>
                                  <div>{ j.hasRequest ? <Link to={ "/viewskills?address=" + j.request }>View Skills</Link> : "None" }</div>
                                  <div>{j.hasRequest && j.status != "Accepted" ? <button onClick={(e) => { e.preventDefault(); this.accept(j.id, j.paymentAmountInWei); }}>Accept</button> : "N/A"}</div>
                                  <div>{j.status == "Accepted" ? <button onClick={(e) => { e.preventDefault(); this.finishJob(j.id); }}>Finish Job</button> : "N/A"}</div>
                                  <div>{ j.status }</div>
                              </div>
                          )
                      }
                  </div>

              </div>
          );
      }
  }
}

const mapStateToProps = state => ({
    profile:state.user.profile,
    jobOffers:state.jobOffers
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    addJob,
    getMyJobOffers,
    clear,
    acceptJob,
    finishJob
    },dispatch);

const AddJobContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddJob);

export default AddJobContainer;
