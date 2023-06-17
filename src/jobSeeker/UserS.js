import React, { Component } from 'react'
import axios from 'axios'
import Header from './Header'
import Search from './Search'
import JobCard from './job/JobCard'
import ViewJobModal from './job/ViewJobModal'
import * as ReactBootstrap from "react-bootstrap";
export default class UserS extends Component {
  state={
    show:false,
    show2:false,
    jobs:[],
    jobs2:[],
    viewJob:{skills:[]},
    search:false
  }
  componentDidMount=()=>this.fetch()
  fetch=()=>{
    
    axios.get("https://jobfinderbackend-ulrg.onrender.com/jobs")
    .then((res)=>{
      const SortOrder = res.data.sort((a, b) =>     a.createdAt > b.createdAt ? -1 : 1,);
        this.setState({
            jobs:SortOrder,
            jobs2:SortOrder
          
        })
    }) 
}
  jobSearch=(search)=>{
    this.setState({search:true})
      const filteredData = jobs.filter(job => {
        return job.work === search.work && job.location === search.location;
      });
      this.setState({
        jobs: filteredData
      });
    
  }
  fetch2=()=>{
    
    this.setState({search:false,jobs:jobs2})
  }
  render() {
    return (
      <div>
        <Header/>
        <Search jobSearch={this.jobSearch}/>
       {this.state.search && <ReactBootstrap.Container className='mb-3 text-end'>
          <ReactBootstrap.Row>
            <ReactBootstrap.Col>
            <ReactBootstrap.Button onClick={this.fetch2} variant='outline-dark'> X Close Search</ReactBootstrap.Button>
            </ReactBootstrap.Col>
          </ReactBootstrap.Row>
        </ReactBootstrap.Container>}
        {
             this.state.jobs.map((job)=>(
        <JobCard key={job.name} {...job} openModal={()=> this.setState({viewJob:job,show:true})}
        />
        ))}
        <ViewJobModal openModal={()=> this.setState({show2:true})} closeModal={()=> this.setState({show:false})} 
        show={this.state.show}
        job={this.state.viewJob}
        />
    </div>
    )
  }
}
