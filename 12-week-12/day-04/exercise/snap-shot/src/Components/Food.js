import { useContext } from 'react'
import { AppContext } from '../App'
import { getImgList } from './Searche'

const Food = () => {
	const {imgList, setImgList} = useContext(AppContext);

	getImgList('food', setImgList)
	return (
		<div className="container text-center">
			<h2> Food Pictures</h2>
		</div>
	)
}

export default Food