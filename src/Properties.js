import React, { Component } from 'react';

class Properties extends Component {
	
  render() {
    return (
      <div>
      <h1>this is properties </h1>
      <p>this data us props </p>
     UserName: {this.props.Name} <br/>
     City : {this.props.city}
      </div>
      );}
  }
 export default Properties;