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
	}else if (currtime >=12 && currtime < 19) {
		grettng="Good Afternoon";
		cssstyle.color="orange";
	}else if (currtime >=19 && currtime < 21) {
		grettng="Good Evening";
		cssstyle.color="skyblue";
	}else{
		grettng="Good Night";
		cssstyle.color="black";
	}
	return (
		<div>
			<h1> Hello , <span style={ cssstyle }> {grettng} <DigitalClock /> </span> </h1>
			
		</div>
	)
}

export default Welcome
