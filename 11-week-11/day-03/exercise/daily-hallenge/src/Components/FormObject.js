import React from 'react'
import DisplayObj from './DisplayObj'

class FormObject extends React.Component{
	constructor(){
		super()
		this.state ={firstName:'',
								 lastName:'',
								 agw:'',
								 gender:'',
								 destination:'',
								 nutsFree:'No',
								 lactoseFree:'No',
								 isVegan:'No'
								}
		}
	
 
	render(){

		const checkEnterText = (e) =>{
			this.setState( {[e.target.name]:e.target.value} );
		} 

		const checkEnterRadio = (e) =>{
			this.setState( {gender:e.target.value} );
		} 

		const checkEnterBox = (e) =>{
			this.setState( {[e.target.name]:e.target.checked ? 'Yes' : 'No'} );
		} 

		
		return(
			<>
				<form action="" className='inputForm'>
					<input className='text' type="text" name='firstName' placeholder='First Name' 
							onChange={(e) => {this.setState({firstName:e.target.value})} }/>
					<br />
					<input className='text' type="text" name='lastName' placeholder='Last Name' onChange={checkEnterText} />
					<br />
					<input className='text' type="text" name='age' placeholder='Age'  onChange={checkEnterText} />
					<br />
					<br />
					<label>
						<input className="radiobutton" type="radio" name='gender' value='male'  onChange={checkEnterRadio}/>
						Male
					</label>
					<br />
					<label>
						<input className="radiobutton" type="radio" name='gender' value='female'  onChange={checkEnterRadio}/>
						Male
					</label>
					<br />
					<label className='destination-header'>Select your destination</label>
					<br />
					<select name="destination" id="" className='destination-input' onChange={checkEnterText} >
						<option value="">-- Please Choose a destination --</option>
						<option value="Thailand">Thailand</option>
						<option value="Japan">Japan</option>
						<option value="Thailand">Brazil</option>
					</select>
					<br />
					<br />
					<label htmlFor="" className='restrictions-title'>Dietary restrictions:</label>
					<br />
					<div className='restrictions'>
						<input type="checkbox" name='nutsFree'  onChange={checkEnterBox}/>
						<span>Nuts free</span>
						<br />
						<input type="checkbox" name='lactoseFree' onChange={checkEnterBox} />
						<span>Lactose free</span>
						<br />
						<input type="checkbox" name='isVegan' onChange={checkEnterBox} />
						<span>Vegan</span>
						<br />
					</div>
					<button className='submit'>Submit</button>
				</form>
				<DisplayObj valuesField={this.state} />
				{/* <DisplayObj valuesField={valuesField:{firstName:'Dimon'}} /> */}
			</>
		)
	}
}

export default FormObject