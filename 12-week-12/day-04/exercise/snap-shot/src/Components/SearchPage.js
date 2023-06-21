import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../App'
import { getImgList } from './Searche'
const SearchPage = () => {
	const {imgList, setImgList} = useContext(AppContext);

	getImgList(useParams().sStr, setImgList)
	return (
		<div className="container text-center">
			<h2> Search for: {useParams().sStr}</h2>
		</div>
	)
}

export default SearchPage