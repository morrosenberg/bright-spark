import React, { Component } from 'react';
import ReactCountdownClock from 'react-countdown-clock';

const myCallback = 1

export default class Timer extends Component {
  render() {
    return (
      <div className="float-right timer">
        <ReactCountdownClock 
          seconds={600}
          color="green"
          alpha={0.7}
          size={90}
          onComplete={myCallback} />
      </div>
    );
  }
}