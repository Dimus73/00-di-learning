const Example3 = (props) =>{
	
	return (
		<div>
			<div>
				<img src={props.info.logo} alt="NO IMAGE AVAILABLE" />
			</div>
			<a href={props.info.url}>{props.info.companyName}</a>
			<h4><b>{props.info.roles[0].title}</b></h4>
			<h2>{props.info.roles[0].startDate} {props.info.roles[0].location}</h2>
			<h3>{props.info.roles[0].description}</h3>

		</div>

	)
}

export default Example3
