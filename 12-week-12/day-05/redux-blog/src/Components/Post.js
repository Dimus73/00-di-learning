import {useSelector, useDispatch} from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { deleteItem, changeTest } from './reducer/action'


export const Post = (props) => {
	const despatch = useDispatch();
	const blogList = useSelector((state) => (state.blogList))
	const testVal = useSelector((state) => (state.testValue))

	const post_id = Number(useParams().id)
	const currentPost = blogList.filter((item) => Number(item.id) === post_id)

	const navigate = useNavigate()

	const onClickDel = () => {
		despatch(deleteItem(post_id));
		despatch(changeTest(100));
		navigate ('/')
	}

	return (
		<div className='container'>
			<div className='post'>
				<h4 className='center'>{currentPost[0].title}</h4>
				<p>{currentPost[0].body}</p>
				<h1>{testVal}</h1>
			</div>
			<div className='center'>
					<button on onClick={()=>despatch(changeTest(10))}>ADDDDD</button>
					<button onClick={onClickDel} className='btn grey'>Delete post</button>
			</div>
		</div>
	)

}

export default Post