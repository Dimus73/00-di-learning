import "bootstrap/dist/css/bootstrap.min.css";
const BootstrapCard = (props) =>{
	const {cardInfo, key} = props;
	return(
		<div className="card m-5" style={{width: '30rem'}} key={key}>
			<img className="card-img-top" src={cardInfo.imageUrl} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{cardInfo.title}</h5>
				<p className="card-text">{cardInfo.description}</p>
				<a href={cardInfo.buttonUrl} class="btn btn-primary">{cardInfo.buttonLabel}</a>
      </div>
    </div>
	)
}

const PlanetsList = (props) =>{
	const {pl_list} = props;
	return(
		<ul className="list-group">
			{pl_list.map((value,key) => {
				return(
					<li className="list-group-item" key={key}>{value}</li>
				)
			})}
	</ul>
	)
} 

export {
	BootstrapCard,
	PlanetsList
}
