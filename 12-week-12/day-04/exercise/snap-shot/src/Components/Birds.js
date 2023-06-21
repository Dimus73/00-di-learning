import { useContext } from 'react'
import { AppContext } from '../App'
import { getImgList } from './Searche'

const Birds = () => {
	const {imgList, setImgList} = useContext(AppContext);

	getImgList('birds', setImgList)

	return (
		<div className="container text-center">
			<h2> Birds Pictures</h2>
		</div>
	)
}

export default Birds