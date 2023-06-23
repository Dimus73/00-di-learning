import {useEffect} from 'react'

const Blocks = () => {

	const listInfo = [
		{
			number:'3600',
			infoText:"Points",
			icon:"key"

		}
	]
	return (
		<div>
			<h1>Hello</h1>
			<Block info={listInfo[0]} />
		</div>
	)
}

const Block = (props) => {
	console.log(props);
	return (
		<div className = 'block'>
			<div style={{verticalAlign:"center"}}>
				<div className='inline_comp'>
					<span class="material-symbols-outlined no_margin">
						{props.info.icon}
					</span>
				</div>
				<div className='inline_comp no_margin'>
					<h5 className='no_margin'>{props.info.infoText}</h5>
				</div>
			</div>
			<h1>{props.info.number}</h1>
		</div>
	)
}
export default Blocks