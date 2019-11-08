import React from "react"

import "./Ring.css"
import CardDisplay from "./CardDisplay"

class Ring extends React.Component {
	state = {
		heures: "",
		alarms: [
			{clock: "6:00"},
			{clock: "12:00"}
		]
	}

	addAlarm = async () => {
		console.log("yolo")
		const newAlarm = [...this.state.alarms, {clock: this.state.heures}]
		await this.setState({alarms: newAlarm})
		console.log(this.state.alarms)

	}
	handleChange = async (e) => {
		await this.setState({[e.target.name]: e.target.value})
	}
	render(){
	  return (
			<div className="globalRing">
				<div className="titleAlarm">
					Alarm
				</div>
				<input name="heures" onChange={this.handleChange}/>
				<input type="submit" value="+" onClick={this.addAlarm}/>
				{this.state.alarms.map((alarm, index) => <CardDisplay key={index} clock={alarm.clock}/>)}
			</div>
	  )
	}
}

export default Ring