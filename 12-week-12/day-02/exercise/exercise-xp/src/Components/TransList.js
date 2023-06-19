import { useSelector, useDispatch } from "react-redux";
import { setItem, deleteItem } from "../redux/actions";

const TransList = (props) => {
	const transactionList = useSelector((state) => (state.transactions))
	const dispatch = useDispatch();

	const goUpdate = (value) => {
		console.log('Button edit', value);
		dispatch(setItem(value))
	}

	const goDelete = (key) => {
		console.log('Button delete', key);
		dispatch(deleteItem(key))
	}

	return(
		<div style={{display:'inline-block', verticalAlign:'top'}}>
			<table>
				<thead>
					<tr>
						<td>Account</td>
						<td>FSC</td>
						<td>Holder</td>
						<td>Amount</td>
					</tr>
				</thead>
				<tbody>
					{transactionList.map((value ,key)=>{
						return (
							<tr>
								<td>{value.account}</td>
								<td>{value.fsc}</td>
								<td>{value.holder}</td>
								<td>{value.amount}</td>
								<td><button onClick={ () => goUpdate({...value, key}) }>Edit</button></td>
								<td><button onClick={ () => goDelete(key)}>Delete</button></td>
							</tr>
						)
					})}
				</tbody>				
			</table>
		</div>
	)
}

export default TransList