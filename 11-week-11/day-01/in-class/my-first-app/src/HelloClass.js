import React from "react";

class HelloClass extends React.Component {
	// constructor(){
	// 	super()
	// }
	render(){
		const products=[
			{name:'apple'},{name:'orange'},{name:'banana'}
		]
		return(
			<>
				<h1>Class component</h1>
				products.map((item,i) => {
					return (

					)
				})
			</>

		)
	}
}

export default HelloClass