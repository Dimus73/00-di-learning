import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import './CSS/main.css'
import data from '../superheroes.json'

const Heroes =() =>{
	const [score, setScore] = useState(0);
	const [topScore,setTopScore] = useState(0);
	const [choiceList,setChoiceList] = useState([]);
	let temp = [];
	for (let i=0; i < data.superheroes.length; i++ ){
		temp.push (i);
	}
	const [subsequence, setSubsequence] = useState(temp);

	const changeSubsequence = (cardId) => {
		console.log('Call rnd (id)', cardId);
// Preparing a new hero sequence list		
		let temp = [];
		for (let i=0; i < data.superheroes.length ; i++){
			let nextNumb;
			do{
				nextNumb = rndRange(0, data.superheroes.length-1); 
			} while (temp.includes(nextNumb));
			temp.push(nextNumb);
		}
		setSubsequence(temp);
// Counting points
		if (!choiceList.includes(cardId)) {
			setScore((a)=>(a+1));
			setChoiceList([...choiceList, cardId]);
			console.log('Current score from changeSubsequence:', choiceList, score);
		} else {
			setScore(0);
			setChoiceList([])
		}
		
	}

// Operations to be performed after changing the value of score
	useEffect (() => {
		console.log('Current score from useEffect:', score);
		if (topScore < score){
			setTopScore(score);
		}	
	},[score])

	return (
		<div className="wrapper">
			<header className="container-fluid fixed-top">
				<div className="row">
					<h1 className="col-sm-8">
					Superheroes Memory Game
					</h1>
					<nav className="col-sm-4">
						<p>
							Score: <span>{score}</span>
						</p>
						<p>
							Top score: <span>{topScore}</span>
						</p>
					</nav>
				</div>
			</header>
			<div className="jumbotron jumbotron-fluid mt-5 pt-4">
				<div className="container">
					<p className="lead">Get points by clicking on an image but don't click on any more than once!</p>
				</div>
			</div>

			{subsequence.map((item) => <Hero item={data.superheroes[item]} rndFunc={changeSubsequence}/>)}
		</div>
	)
}


const Hero = (props) =>{
	return(
		<div m_id={props.item.id} id={props.item.id} key={props.item.id} className="card" onClick={(e) => {
			// console.log('Event from div:', e);
			// console.log('Element ID:', e.target.parentElement.parentElement.parentElement.id);
			// console.log('Element M_ID:', e.target.attributes.m_id.value);
			const id = Number(e.target.attributes.m_id.value)
			props.rndFunc(id);
		}  }>
			<div m_id={props.item.id} className="img-container">
				<img m_id={props.item.id} src={props.item.image} alt={props.item.name} />
			</div>
			<div m_id={props.item.id} className="img-content">
				<ul m_id={props.item.id}>
					<li m_id={props.item.id}>
						<strong>Name:</strong>
						{props.item.name}
					</li>
					<li>
						<strong>Occupation:</strong>
						{props.item.occupation}
					</li>
				</ul>
			</div>
		</div>
	)
}

function rndRange(a,b){
  return Math.round(Math.random()*(b-a))+a;
}


export default Heroes