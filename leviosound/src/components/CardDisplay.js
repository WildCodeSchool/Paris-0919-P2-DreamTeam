import React from "react"

import "./Ring.css"

class CardDisplay extends React.Component {
	state = {
		switch: false,

	}
	
	handleClick = () => {
		this.setState({switch: !this.state.switch})
	}

	render() {
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