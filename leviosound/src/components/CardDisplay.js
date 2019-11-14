import React from "react"

import "./Ring.css"

class CardDisplay extends React.Component {
	state = {
		switch: false,
		currentTime: '',
		clock: this.props.clock
	}
	handleClick = () => {
		this.setState({ switch: !this.state.switch })
	}
	setCurrentTime = () => {
		// console.log(this.state.currentTime) 
		this.setState({
			currentTime: new Date().toLocaleTimeString('en-US', { hour12: false })
		})
	}
	checkAlarmClock = () => {
		this.setCurrentTime()
		if(this.state.currentTime === this.state.clock && this.state.switch) {
			//activer le lecteur			
			 window.location.href = "https://www.freespecialeffects.co.uk/soundfx/sirens/alarm_01.wav";
		} 
	}

	componentWillUnmount(){
		clearInterval(this.clock);
		clearInterval(this.interval);
	}
	componentDidMount() {
		this.clock = setTimeout(
		  () => this.setCurrentTime(),
		  1000
		)
		this.interval = setInterval(
		  () => this.checkAlarmClock(),
		1000)
	}

	render() {
		console.log("yolo", this.state.currentTime)
		console.log(this.state.switch)
		return (
			<div>
				<div className="cardGlob">
					<div className="right">{this.props.clock}</div>
					<label className="switch">
						<input type="checkbox" onClick={this.handleClick} />
						<span className="slider round" ></span>
					</label>
				</div>
			</div>
		)
	}
}


export default CardDisplay