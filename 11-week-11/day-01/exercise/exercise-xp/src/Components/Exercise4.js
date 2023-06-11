import './Exercise4.css'

const style_header = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial"
};

const Exercise4 = () => {
return (
	<div style={{display:'flex', 
							flexWrap:'wrap', 
							flexDirection:'column',
							justifyContent:'center',
							alignItems:'center'}}>
		<h1 style={style_header}> 
								This is a header
		</h1>
		{/* <h1 style={{backgroundColor:'cyan', 
								'color':'red'}}> 
								This is a header
		</h1> */}
		<p className='para'>This is paragraph</p>
		<a href="www.ya.ru">This is a LINK</a>
		<h3>Thi is a Form</h3>
		<form>
			<label for="test">Enter you name</label>
			<input name="test" type="text"></input>
			<input type="submit" value={"name"}></input>
		</form>
		<div>
				<img src="https://www.bethowen.ru/upload/iblock/a22/a221ced820e9d216ea44cfae067ece5f.JPG" width={'200px'}></img>
		</div>
		<ul>
			This is a list:
			<li>Item 1</li>
			<li>Item 2</li>
			<li>Item 3</li>
		</ul>
	</div>
)
}

export default Exercise4