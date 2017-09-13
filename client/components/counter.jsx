import React from 'react';
import ReactCountdownClock from 'react-countdown-clock';

const Counter = props => (
    <div id="timer">
      <ReactCountdownClock
        seconds={60}
        color="#5a5768"
        alpha={0.9}
        font={'Georgia'}
        size={180}
        onComplete=''
      />
    </div>
);

export default Counter;
