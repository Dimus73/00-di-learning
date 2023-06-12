import React, {useState} from 'react';

const Language = (props) => {
	const {lang, key_n} = props;
	const [count, countSet] = useState(0);

	const increaseValue = () => {
		countSet(a => a+1);
	}

	return (
		<div className='language' key={key_n} >
			<div className='voteCount'>{count}</div>
			<div className='languageName'>{lang}</div>
			<button onClick={increaseValue}>Click Here</button>
		</div>
	)

}

export default Language