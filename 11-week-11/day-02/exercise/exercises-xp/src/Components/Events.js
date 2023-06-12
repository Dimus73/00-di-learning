import React from "react";

class Event extends React.Component{
 
	constructor(){
		super();
		this.state={butt:'ON'}
	}


	render(){

const clickMe = () => alert("I was clicked")

const KeyDownEvent = (e) => {
	console.log(e);
	if (e.code === "Enter"){
		console.log('Value from event', e.target.value);
		alert(`The Enter key was press. Your input is:${e.target.value}`)
	}
}

const clickMeButt = (e) => {
	console.log(this.state.butt, e);
	if (this.state.butt === 'ON') {
		this.setState({butt:'OFF'})
	} else {
		this.setState({butt:'ON'})
	}
}
	return(

		<div>
			<input type="submit" value="Click" onClick={clickMe} />
			<input type="text" onKeyDown={KeyDownEvent}/>
			<input type="submit" value={this.state.butt} onClick={clickMeButt} />
		</div>
	)
 }
}

export default Event