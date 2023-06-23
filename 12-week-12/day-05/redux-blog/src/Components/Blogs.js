import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'
import { deleteItem } from "./reducer/action"


const Blogs = () => {

	const blogList = useSelector((state) => state.blogList);

	return (
		<div className='container home'>
			{blogList.map((value) => <Blog item={value}/>) }
		</div>
	)
}

const Blog = (props) => {
	// const dispatch = useDispatch();
	return(
		<div key={'d1'+props.item.id} className='post card'>
			<img key={'i1'+props.item.id} src="blog.png" alt="" />
			<div key={'d2'+props.item.id} className='card-content'>
				<Link key={'a1'+props.item.id} to={"/" + props.item.id}> 
				<span key={'s1'+props.item.id} className='card-title red-text'>{props.item.title}</span>
				</Link>
				<p>{props.item.body}</p>
			</div>
		</div>
	)
}
export default Blogs