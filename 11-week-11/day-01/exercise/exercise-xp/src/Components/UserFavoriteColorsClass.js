import React from 'react'

class UserFavoriteColors extends React.Component {

	render(){
		const {user1}= this.props
		console.log('------', user1);
		return (
			user1.favAnimals.map((value, key) => {
				return <li key={key} >{value}</li>
			})
		)
	}
}

export default UserFavoriteColors