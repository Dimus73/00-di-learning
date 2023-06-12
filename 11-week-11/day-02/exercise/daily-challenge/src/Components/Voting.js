import {useState} from 'react';
import Language from './Languages';


const Voting = () => {
	const st = {
		languages : [
				{name: "Php", votes: 0},
				{name: "Python", votes: 0},
				{name: "JavaSript", votes: 0},
				{name: "Java", votes: 0}
		]
	}
		// let setValues=[]
	// for (i of state.languages){
	// 	const [count, setCount] = useState(i.votes);
	// 	setValues.push({
	// 		name:i.name,
	// 		count:count,
	// 		setCount:setCount
	// 	})
	// } 
	return(
		<div className='languages'>{
			st.languages.map((value, id) => {
				return <Language lang={value.name} key_n={id}/>
			})
		}</div>
	)
}

export default Voting
