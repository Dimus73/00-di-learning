import React from 'react'

class ButtonObj extends React.Component{
	constructor() {
		super();
		this.state = {
			
		}
	}

	send () {
		this.setState(() => { throw Error('Crashed (from Dima)....') })
	}

	render (){
		
		return (
			
			<button onClick={this.send}>Occur an error</button>
		)
	}
}

// const ButtonObj = () => {
// 	throw Error('Crashed (from Dima)....')
// }

export default ButtonObj