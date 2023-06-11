import './Hello.css'
import React from 'react'
import HelloClass from './HelloClass.js'

const Hello =()=>{
	const users = [
		{
		name: 'Mary',
		email:'mary@aaaa.ee',
		id:1
	},
	{
		name: 'Petr',
		email:'Petr@aaaa.ee',
		id:2
	},
	{
		name: 'Mikle',
		email:'Mikle@aaaa.ee',
		id:3
	}

]

	const styling = {
		textAlign:'center', 
		display:'inline-block',
		padding:'20px',
		border:'1px solid white'
		}

	// const returnUsers = users.map((item,i)=>{
	// 	return(
	// 		<div key={i} style={styling}>
	// 			<h4 className = "title" >{item.name}</h4>
	// 			<p>{item.email}</p>
	// 		</div>
	// 	)
	// })

	const returnUsers = users.map((item,i)=>{
		return(
			<div style={styling}>
				<h4 className = "title" >{item.name}</h4>
				<p>{item.email}</p>
			</div>
		)
	})

// 	return(
// 		<div>
// 			<h1>Hello,</h1>
// 			{
// 				returnUsers
// 			}
// 		</div>
// 	)
// }

return(
	<React.Fragment>
		<h1>Hello,</h1>
		{
			returnUsers
		}

		<HelloClass />
	</React.Fragment>
)
}



export default Hello