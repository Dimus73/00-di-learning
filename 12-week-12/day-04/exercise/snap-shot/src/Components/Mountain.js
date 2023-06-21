import { useContext } from 'react'
import { AppContext } from '../App'
import { getImgList } from './Searche'
const Mountain = () => {
	const {imgList, setImgList} = useContext(AppContext);

	getImgList('mountein', setImgList)
	return (
		<div className="container text-center">
			<h2> Mountain Pictures</h2>
		</div>
	)
}

export default Mountain