import React from 'react'
import './index.css'
import DigitalClock from './DigitalClock'

function Welcome() {
	let currtime = new Date();
	currtime = currtime.getHours();
	let grettng=" ";
	const cssstyle={ };

	if (currtime >= 1 && currtime <12) {
		grettng="Good Morning";
		cssstyle.color="green";
	}else if (currtime >=12 && currtime < 16) {
		grettng="Good Afternoon";
		cssstyle.color="orange";
	}else if (currtime >=16 && currtime < 21) {
		grettng="Good Evening";
		cssstyle.color="skyblue";
	}else{
		grettng="Good Night";
		cssstyle.color="black";
	}
	return (
		<>
		<h1> Welcome to my first React Application.</h1>
		<div className="div_css">
		<h2 className="h1_css"> Hello , <span style={ cssstyle }> {grettng} </span> <DigitalClock /></h2>
		</div>
		</>
	)
}

export default Welcome
