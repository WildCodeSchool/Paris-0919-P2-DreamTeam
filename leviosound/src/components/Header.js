import React from 'react'
import {Link} from 'react-router-dom'

import "./Header.css"

const Header = () => {
	return (
	 	 <div className="Header-nav">
					<div>
						<ul className="header-menu">
						<Link to="/"><li className="header-itemMenu">Home</li></Link>
						<Link to="/weather"><li className="header-itemMenu">My Playlist</li></Link>
						<Link to="/weather"><li className="header-itemMenu">My Alarm</li></Link>
						</ul>
					</div>
	 	 </div>
	)	
}

export default Header