const UserFavoriteColor = (props) => {
	const {user1} = props;
	return(
		user1.favAnimals.map((value,key)=>{
			return <li>{value}</li>
		})
	)
}

export default UserFavoriteColor