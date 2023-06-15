import { useState, useEffect } from "react";
import Data from '../QuotesDatabase';

const Quotes = () => {
	const [numb, setNumb] = useState(rndRange(0,10))

	return (
			<div >
				<div className="quotebox" style={{backgroundColor: 'white'}}>
					<Quote qn={numb} />
					<button id="newquote" style={{backgroundColor: "rgb(54, 122, 14)"}}  onClick={() => {
							let newNumb;
							do {
								newNumb = rndRange(0, Data.length-1);
							} while (numb === newNumb)
							 setNumb(newNumb)
							 }}>New quote</button>
				</div>
			</div>
	)
}

const Quote = (props) => {
	console.log('This is props param:', props);

	return(
		<div className="fadeIn" style={{color: "rgb(54, 122, 14)"}}>
			<h1 id="quote">{Data[props.qn].quote}</h1>
			<h5 id="author">{Data[props.qn].author}</h5>

		</div>
	)
}

function rndRange(a,b){
  return Math.round(Math.random()*(b-a))+a;
}

export default Quotes