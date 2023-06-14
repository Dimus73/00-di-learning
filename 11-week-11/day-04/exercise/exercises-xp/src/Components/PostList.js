	import data from '../test.json' 

const PostList = () =>{

	return(
		<>
			<h1>Test</h1>
			{data.map((item) => <Post data={item}/> )
			}

		</>
	)
}



const Post = (props) =>{
	// console.log(props);
	return (
		<div>
			<h2>{props.data.title}</h2>
			<p>{props.data.content}</p>
			<h5>{props.data.date}</h5>
			<h5>{props.data.slug}</h5>
		</div>
	)
}

export default PostList