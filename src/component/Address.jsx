import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
export default class Address extends Component {

  render() {
    return (
      <div>
          <p>alamat pengiriman</p>
          <input></input>
          <div>
          <Button className = "buttonLunch" variant="danger">Paket Lunch</Button>
          <Button variant="secondary">Paket Diner</Button>
          </div>
      </div>       
    )
  }
}
