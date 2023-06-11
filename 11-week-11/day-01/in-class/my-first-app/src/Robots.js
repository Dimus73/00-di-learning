
const Robots = () =>{
	const returnRobots = Robots.map((item,i) =>{
		return(
			<div>
				<p>Name:{item.name}</p>
				<img src="https://robohash.org/6?size=150x150" />
			</div>
		)
	})
}