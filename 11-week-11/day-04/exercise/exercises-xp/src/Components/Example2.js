const Example2 = (props) =>{
	let t =[1, 2, 3] 
	return (
		<div>
			<h4>{props.skill.Area}</h4>
			<br />
			<ul>
				{props.skill.SkillSet.map((value, key) => <li key={key}> {value.Name}</li>)}  
			</ul>
		</div>

	)
}

export default Example2
