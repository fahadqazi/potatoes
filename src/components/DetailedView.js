import React, { Component } from "react";
import {Link} from 'react-router';

class DetailedView extends Component {
  render() {
    return (
      <div>
        <div>This is the details page.</div>
        <Link to="/"><button>Back</button></Link>
      </div>
      
    );
  }
}

export default DetailedView;
