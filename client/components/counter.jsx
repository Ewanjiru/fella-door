import React from 'react';
import ReactCountdownClock from 'react-countdown-clock';
import io from "socket.io-client";

class Counter extends React.Component{
  constructor(props){
    super(props)
    this.state={time:0}
    this.Signalcall=this.Signalcall.bind(this)
  }

  componentDidMount(){
    console.log("hellox")
    const socket = io();
    console.log("hello data"+Object.keys(socket))
    this.Signalcall
    socket.on("message",(data)=>{
      console.log(this.state.time)
      this.setState({time:60})
      console.log(this.state.time)
    })
  }

  Signalcall(){
    this.setState({time:0})
    fetch(window.location.origin+"/switch")
    console.log("yo")
  }

  render(){
    return(<div id="timer">
      <ReactCountdownClock
        seconds={this.state.time}
        color="#5a5768"
        alpha={0.9}
        font={'Georgia'}
        size={180}
        onComplete={this.Signalcall}
      />
    </div>)
  }
}

export default Counter;
