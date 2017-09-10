import React from 'react';
import ReactCountdownClock from 'react-countdown-clock';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const Sidebar = props => (
  <div>
    <div id="timer">
      <ReactCountdownClock
        seconds={60}
        color="#000"
        alpha={0.9}
        font={'Georgia'}
        size={180}
        onComplete=''
      />
    </div>
    <div className="sidebar-wrapper">
      <div>
        <Card className="info-wrapper">
          <CardText>
            popping up infor about user!
          </CardText>
        </Card>
      </div>
    </div>
  </div>
);

export default Sidebar;
