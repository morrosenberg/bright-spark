import React, { Component } from 'react';
import '../../Styles/_jumbotron.scss';

export default class TopContent extends Component {
  render() {
    return (
      <div>        
        <div className="jumbotron jumbotron-fluid">
          <div className="jumbotron-bg jumbo-padding">
            <h1 className="display-3 text-center text-white">Welcome to Bright Spark</h1>
            <p className="lead text-center text-white bottom-padding">
              <a className="btn btn-xs btn-outline-success text-muted" width="35" height="35" href="/tests">Practice makes prefect</a>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

