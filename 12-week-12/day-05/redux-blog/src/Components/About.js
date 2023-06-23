import {useSelector, useDispatch} from 'react-redux'


const About = () => {
	const despatch = useDispatch();
	const testVal = useSelector((state) => (state.testValue))

	return(
		<>
			<h1>About</h1>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolores ad consectetur maiores eius quibusdam ea, dignissimos modi, accusantium atque corporis earum! Similique impedit magnam ut! Maiores, saepe porro. Cum.</p>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolores ad consectetur maiores eius quibusdam ea, dignissimos modi, accusantium atque corporis earum! Similique impedit magnam ut! Maiores, saepe porro. Cum.</p>
			<h1>{testVal}</h1>
		</>
	)
}

export default About