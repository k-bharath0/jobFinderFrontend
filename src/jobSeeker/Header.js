import React, { Component } from 'react'
import * as ReactBootstrap from "react-bootstrap"; 
export default class Header extends Component {
  endSession=()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/';
  }
  render() {
    return (
        <div>
             <ReactBootstrap.Container fluid style={{backgroundColor:"black"}} className='p-5'>
              <ReactBootstrap.Row className='p-3'>
                <ReactBootstrap.Col className='text-start'>
                <h1 style={{color:"white"}} className='ms-5'>Job Finder</h1>
                  </ReactBootstrap.Col>
                <ReactBootstrap.Col className='text-end'>
                <ReactBootstrap.Button onClick={this.endSession} variant="info" className='ms-5'>Log out</ReactBootstrap.Button>
                </ReactBootstrap.Col>
              </ReactBootstrap.Row>
            </ReactBootstrap.Container>
        </div>
    )
  }
}
