import React, {Component} from 'react';
import { connect } from 'react-redux'
import {clear, getAllOpenJobOffers, applyForJob } from '../../modules/job-offers';
import { bindActionCreators } from 'redux'
import {Redirect} from 'react-router-dom';
import labels from '../../constants/labels';
import { RingLoader } from 'react-spinners';
import { Link } from 'react-router-dom'
import moment from 'moment';

class ViewJobs extends Component{

  constructor(props){
    super(props);

    this.state = {
        uportId : props.profile ? props.profile.address : "",
    };
  }

    componentWillMount(){
        console.log('getting');
        this.props.getAllOpenJobOffers();
    }

  applyForJob(event, jobId){
      event.preventDefault();
      this.props.applyForJob(jobId);
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
              Please wait while we are retrieving all open job offers
          </div>);
      }
      else if (this.props.jobOffers.applyingForJob){
          return (<div className="full-height center-container">
              <RingLoader
                  color={'#000000'}
                  loading={true}
              />

              Please accept in your browser wallet to add job offer.<br/>
              Please be patient, this can take up to a minute after you've accepted.
          </div>);
      } else if (this.props.jobOffers.applyForJobResult){
          return (<div className="full-height center-container">
              Job Request Submitted, it can take up to a minute to show and we will refresh once it's available. Please click below to see transaction or clear to view your jobs.
              <button onClick={(e) => {e.preventDefault(); this.props.clear(); this.props.getAllOpenJobOffers();}}>Clear</button>

<a target="_blank" href={ "https://rinkeby.etherscan.io/tx/" + this.props.jobOffers.applyForJobResult }>View Transaction</a> 
          </div>);
      }else {//if (this.props.claims.organisations){
          return (
              <div style={{display:"flex", flexDirection:"column", justifyContent:"flex-start"}} className="full-height center-container">
                  <h3>Existing Jobs</h3>
                  <div className="claimsTable">
                      <div className="claimsRow">
                          <div>
                              Job Title
                          </div>
                          <div>
                              Job Description
                          </div>
                          <div>
                              Amount (Ether)
                          </div>
                          <div>
                              Created At
                          </div>
                          <div>
                              Apply For Job
                          </div>
                      </div>
                      {
                          this.props.jobOffers.openJobOffers.map(j =>
                              <div key={j.title+j.created} className="claimsRow">
                                  <div>{ j.title }</div>
                                  <div>{ j.description }</div>
                                  <div>{ Number(j.paymentAmount).toFixed(6)}</div>
                                  <div>{ moment(new Date(j.created * 1000)).format("YYYY/MM/DD HH:mm") }</div>
                                  <div>{j.myJob ? <span>N/A</span> : <button onClick={(e) => { this.applyForJob(e, j.id)}}>Apply</button>}</div>
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
    clear,
    getAllOpenJobOffers,
    applyForJob
    },dispatch);

const ViewJobsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewJobs);

export default ViewJobsContainer;
