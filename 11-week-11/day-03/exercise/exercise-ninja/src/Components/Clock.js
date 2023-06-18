import {useState, useEffect} from 'react'

function Clock () {
	const [currentSec, setCurrentSec] = useState(new Date())

	useEffect(()=>{
		setInterval(()=>{
			// console.log('Change time');
			setCurrentSec(new Date())
		}, 1000 )
	},[])

	let angle=360*currentSec.getMinutes()+360/60*currentSec.getSeconds();
	// console.log('Before the return', currentSec);
	return(
		<div className='main_cont'>
			<div className='time_element' style={{transform: `rotate(${angle}deg)`, width: '500px'}}>{currentSec.getSeconds()} </div>
			<div className='time_element' style={{transform: `rotate(${angle}deg)`, width: '450px'}}>{currentSec.getMinutes()} </div>
		</div>
	)

}

export default Clock