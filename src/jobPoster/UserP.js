import React, { Component } from 'react'
import axios from 'axios'
import Header from './Header'
import JobCard from './job/JobCard'
import NewJobModal from './job/NewJobModal'
export default class UserP extends Component {
    state={
        show:false,
        jobs:[]
      }
      
    componentDidMount=()=>{this.fetch()}
    fetch=()=>{
          axios.get("https://jobfinderbackend-ulrg.onrender.com/jobs", {
           params: {
             userId:'' 
           }
         })
         .then((res) => {
           const filteredData = res.data.filter(job => {
             return job.userId === localStorage.getItem('user');
           });
           this.setState({
             jobs: filteredData
           });
         })
         .catch((error) => {
          return(error)
         });
       }
  render() {
     return (
      <div>
        <Header openJobModal={()=> this.setState({show:true})}/>
        <NewJobModal fetch={this.fetch}  closeJobModal={()=> this.setState({show:false})} show={this.state.show}/>
        
        {
            this.state.jobs.map((job)=>(
        <JobCard key={job.name} job={job}/>
              ))}
              
      </div>
    )
  }
}
