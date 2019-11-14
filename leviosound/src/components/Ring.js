import React from "react"
import getTime from 'date-fns/getTime'
import getMilliseconds from 'date-fns/getMilliseconds'
import differenceInMinutes from 'date-fns/differenceInMinutes'
import "./Ring.css"
import CardDisplay from "./CardDisplay"

class Ring extends React.Component {
	state = {
		time: "",
		alarms: [
			{clock: "6:00"},
			{clock: "12:00"}
		]
	}

	addAlarm = async () => {
		const newAlarm = [...this.state.alarms, {clock: this.state.time}]
		await this.setState({alarms: newAlarm})
	}

	setAlarmTime = (event) => {
		event.preventDefault();
		const inputAlarmTimeModified = event.target.value + ':00'
		this.setState({
			time: inputAlarmTimeModified
		})
}
	render(){
	  return (
			<div className="globalRing">
				<div className="titleAlarm">
					Alarm
				</div>
				<input name="time" type="time" onChange={this.setAlarmTime}/>
				<input type="submit" value="+" onClick={this.addAlarm}/>
				{this.state.alarms.map((alarm, index) => 
					<CardDisplay key={index} clock={alarm.clock}/>
					)
				}
			</div>
	  )
	}
}

export default Ring