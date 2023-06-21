import { createContext, useState, useEffect, useContext } from "react"
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../App'

// export const AppContext = createContext();

const URL = 'https://api.pexels.com/v1/search'



export const getImgList = (q, setImgList) => {
	const header = new Headers();
	header.append ('Authorization', 'hn1SFO7B0eSciDh4UlBfB0nKZuWF0RIrb3xrsdM64oiYdZ96Ps3JS7Fi')

	const params = new URLSearchParams();
	params.append('query',q)
	params.append('orientation','square')
	params.append('per_page', 32)

	const url = URL+'?'+params.toString();


	fetch (url, {
		method:'GET',
		headers:header
		})
		.then ( res => res.json() )
		.then (data => setImgList(data.photos) )
		.catch (error => console.log(error))
}


const Search = (props) => {
	const {imgList, setImgList} = useContext(AppContext);


	useEffect (( () => {
		console.log("We are in useEffect");
		getImgList("new", setImgList);
	}),[])

	const navigate = useNavigate() 


	const onSearchButton = (e) => {
			e.preventDefault();
			console.log(e);
			navigate ('/search/' + e.target.elements.q.value);
			// getImgList (e.target.elements.q.value, setImgList)
	}

	return (
		<div className="container text-center">
			<form action="" onSubmit={onSearchButton}>
				<input type="text" name="q" placeholder="Search..."/>
				<button style={{backgroundColor:'rgba(0, 0, 0, 0)', border:'none'}}><img src="search.svg" alt="" /></button>
			</form>
			<nav className="main-nav">
				<ul>
					<ui className="btn btn-primary m-3" >
						<Link className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" to="/">Home</Link>
					</ui>
					<ui className="btn btn-primary m-3" >
						<Link className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" to="/mountain">Mountain</Link>
					</ui>
					<ui className="btn btn-primary m-3">
						<Link className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" to="/beaches">Beaches</Link>
					</ui>
					<ui className="btn btn-primary m-3">
						<Link className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" to="/birds">Birds</Link>
					</ui>
					<ui className="btn btn-primary m-3">
						<Link className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" to="/food">Food</Link>
					</ui>
				</ul>

			</nav>
		</div>
	)
}

export default Search

