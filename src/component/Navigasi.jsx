import React, { Component } from 'react'
import {Navbar,} from "react-bootstrap"
import kulinaLogo from '../foto/kulina-logo.png'


export default class Navigasi extends Component {
  render() {
    return (
     <Navbar >
      <Navbar.Brand href="#home">
      <img
        alt="kulinaLogo"
        src = {kulinaLogo}
        height="45px"
        className="d-inline-block align-top"
      />
      </Navbar.Brand>
      <div style={{width: "100%", textAlign: "right", color:"#ababab"}}>
          <i class="material-icons">menu</i>
      </div>
      

     </Navbar>
    )
  }
}
