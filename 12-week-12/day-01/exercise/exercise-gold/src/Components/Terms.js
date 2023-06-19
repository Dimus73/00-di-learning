import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeTermList } from "../redux/actions";
// import { reducer } from "../redux/reducer";


const Terms = (props) => {
	const term = useSelector((state) => (state.term))
	const currentTerm = useSelector((state) => (state.currentTerm))
	const dispatch =useDispatch()

	// console.log('Term:', term); 
	// console.log('currentTerm:', currentTerm); 
	// console.log('This is props=>', props);

	const searchFunc = (e) => {
		const tempList = term.filter ((value) => { 
			return value.title.indexOf(e.target.value)!=-1 || e.target.value == '';
		})

		console.log('List of searched:', tempList);
		console.log('action:', changeTermList(tempList));
		dispatch (changeTermList(tempList)) ;
	}


	return(
		<div>
			<h1>Hello</h1>
			<input type="text" onChange={searchFunc} />
			<ul>
				{currentTerm.map((item) =>
				(<li> {item.title}</li>)
				)}
			</ul>
		</div>
		
	)

}

export default Terms