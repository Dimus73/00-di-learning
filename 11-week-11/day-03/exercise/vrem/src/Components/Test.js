import React from 'react'

class Test extends React.Component{
	constructor(){
		super();
		this.state={s:1}
	}
	render(){

		return(
			<div>
				<h1>Test ggggg</h1>
				<button onClick={() =>{throw Error('Error from button from test')}} >
					Button in Test
				</button>
			</div>
			)
	}
}

export default Test
