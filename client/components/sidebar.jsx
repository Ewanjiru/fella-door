import React from 'react';
import ReactCountdownClock from 'react-countdown-clock';
import Paper from 'material-ui/Paper';

const Sidebar = () => (
  <div className="sidebar-wrapper">
    <Paper zDepth={2} className="paper">
      <ReactCountdownClock
        seconds={60}
        color="#000"
        alpha={0.9}
        size={180}
        onComplete=""
      />
    </Paper>
  </div>
);

export default Sidebar;
