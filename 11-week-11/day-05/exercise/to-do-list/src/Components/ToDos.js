import React from 'react'

class ToDos extends React.Component{
	constructor (props){
		super(props);
		this.URL = 'http://127.0.0.1:3040/list'
		this.state={tdList:[
			// {id:1, notes:'11111111111111'},
			// {id:2, notes:'22222222222222'}
		]
		}
	}

	async allDb () {
		console.log('We are in AllDb');
		const res = await fetch(this.URL);
		const data = await res.json();
		this.setState({tdList:data})
		console.log(data);

	}

	async addDb(notes) {
		const reqData ={
			method:"POST",
			headers:{
				'Content-type':'application/json'
			},
			body:JSON.stringify({notes})
		}
		const res = await fetch(this.URL, reqData);
		const resJS = await res.json()
		console.log('Added info:', resJS);
	}

	async delDb(id){
		const reqData ={
			method:"DELETE",
			headers:{
				'Content-type':'application/json'
			},
		}
		console.log('We delete this:', this.URL+'/'+id);
		const res = await fetch(this.URL+'/'+id, reqData)
		const resJS = await res.json()		
		console.log('Delete info:', resJS);
	}

	delete = async (index) => {
		// console.log("delete", this.state);
		// if (index){
		// 	let newList = this.state.tdList.filter((value,i) => i != index)
		// 	this.setState({tdList:newList})
		// }
		console.log('Delete:', index);
		await this.delDb(index);
		await this.allDb();
	}
	
	componentDidMount(){
		this.allDb()
	
	}
	render(){

		const addNote = async (e) => {
			e.preventDefault()
			// console.log('Event happen',e.target.newNote.value);
			// this.setState({tdList: [...this.state.tdList, {id:100, notes:e.target.newNote.value}] })
			await this.addDb(e.target.newNote.value);
			await this.allDb();
			e.target.newNote.value=''
		}

		return (
			<div>
				<h1>This is ToDos</h1>
				{ this.state.tdList.map ( (value, index) => <ToDo delFunc={this.delete} value={value} index={index} />) }
				<br />
				<form onSubmit={addNote} action="">
					<input name='newNote' type="text" />
				</form>
			</div>
		);
	}
}

class ToDo extends React.Component{
	constructor (props){
		super(props);
	}

	deleteElement = (e) => {
		console.log("Stage one", e.target.parentElement.id);
		this.props.delFunc(e.target.parentElement.id);
}

	render(){
		
		return (
			<div onClick={this.deleteElement} id={this.props.value.id} key={this.props.index}>
				<h2>{this.props.value.notes}</h2>
			</div>
		)
	}
}

export default ToDos