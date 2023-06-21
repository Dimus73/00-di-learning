import { useContext } from 'react'
import { AppContext } from '../App'
import { getImgList } from './Searche'

const Beaches = () => {
	const {imgList, setImgList} = useContext(AppContext);

	getImgList('beaches', setImgList)
	return (
		<div className="container text-center">
			<h2> Beaches Pictures</h2>
		</div>
	)
}

export default Beaches