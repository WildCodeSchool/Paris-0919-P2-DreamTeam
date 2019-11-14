import React from "react"

class Alarm extends React.Component {
 
  	state = {
      currentTime: '',
      alarmTime: ''
  	}

	componentDidMount(){
	    this.clock = setInterval(
	      () => this.Set_Current_Time(),
	      1000
	    )
	    this.interval = setInterval(
	      () => this.checkAlarmClock(),
	    1000)
	}

	componentWillUnmount(){
	    clearInterval(this.clock);
	    clearInterval(this.interval);
	}

	Set_Current_Time(){
	    this.setState({
	    currentTime: new Date().toLocaleTimeString('en-US', { hour12: false })
	    });
	}

	Set_Alarm_Time = (event) => {
	    event.preventDefault();
	    const inputAlarmTimeModified = event.target.value + ':00'
	    this.setState({
	      alarmTime: inputAlarmTimeModified
	    })
	}

	checkAlarmClock(){
	    if(this.state.alarmTime == 'undefined' || !this.state.alarmTime) {
	      	this.alarmMessage = "Pls set your alarm.";
	    } else {
	      this.alarmMessage = "Your alarm is set for " + this.state.alarmTime + ".";
	      if(this.state.currentTime === this.state.alarmTime) {
	     		window.location.href = "https://www.freespecialeffects.co.uk/soundfx/sirens/alarm_01.wav";
				} 
				else {
	        console.log("not yet");
	      }
	   }   
	}

	render() {
		return (
		  <div>
		    <h1>Your Alarm Clock</h1>
		    <h2>{this.alarmMessage}
		    </h2>
		      <input type="time" onChange={this.Set_Alarm_Time} />
		  </div>
		  );
		}
}

export default Alarm;

