import React,{useState} from 'react'

function DigitalClock() {
	let time = new Date().toLocaleTimeString();
	let hours = new Date().getHours();
	let timeset;
	if(hours <= 12){
		timeset = 'AM'
	}else{
		timeset = 'PM'
	}
	const [ctime , setCtime] = useState(time)

	const updateTime = () => {
		time = new Date().toLocaleTimeString();
		setCtime(time);
	}
	setInterval(updateTime,1000);
	return (
		<>
			<h1>{ctime} {timeset}</h1>
		</>
	)
}

export default DigitalClock