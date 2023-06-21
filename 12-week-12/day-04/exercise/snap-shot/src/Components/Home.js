import { useContext } from 'react'
import { AppContext } from '../App'
import { getImgList } from './Searche'
const Home = () => {
	const {imgList, setImgList} = useContext(AppContext);

	getImgList('new', setImgList)
	return (
		<div className="container text-center">
			<h2> Home page</h2>
		</div>
	)
}

export default Home