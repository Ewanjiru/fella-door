import React from 'react';
import ReactCountdownClock from 'react-countdown-clock';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class CountDown extends React.Component{
  constructor(props){
    super(props)
    this.state={time:this.props.time}
    this.Signalcall=this.Signalcall.bind(this)
  }

  componentWillReceiveProps(newProps){
    console.log(newProps)
    this.setState={time:newProps.time}
  }

  Signalcall(){
    fetch("http://127.0.0.1:8080/switch")
  }

  render(){
    return(
    <div id="timer">
      <ReactCountdownClock
        seconds={60}
        color="#000"
        alpha={0.9}
        font={'Georgia'}
        size={180}
        onComplete={this.Signalcall}
      />
    </div>
    )
  }
}

export default CountDown;
