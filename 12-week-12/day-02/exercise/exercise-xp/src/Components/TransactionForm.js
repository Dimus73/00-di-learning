import { useState, useEffect } from "react"; 
import { useSelector, useDispatch } from 'react-redux';
import { addTransaction, editItem, setItem } from "../redux/actions";

const TransactionForm = (props) => {

	const [account, setAccount] = useState('')
	const [fsc, setFsc] = useState('')
	const [holder, setHolder] = useState('')
	const [amount, setAmount] = useState('')

	const setFunction = {
		account:setAccount,
		fsc:setFsc,
		holder:setHolder,
		amount:setAmount
	}

	const emptyItem = {
		account:'',
		fsc:'',
		holder:'',
		amount:'',
		key:''
	}

	const transactionsList = useSelector((state)=>(state.transactions))
	const item = useSelector((state)=>(state.item))

	//-------------------------
	useEffect(() => {
		// console.log('Working on  UseEffect');
		setAccount(item.account);
		setFsc(item.fsc);
		setHolder(item.holder);
		setAmount(item.amount);
	
	},[item])

	//-------------------------

	const dispatch = useDispatch();

	const handleSubmit = (e)=>{
		e.preventDefault();
		console.log(e);
		setAccount (e.target.elements.account.value);
		setFsc (e.target.elements.fsc.value);
		setHolder (e.target.elements.holder.value);
		setAmount (e.target.elements.amount.value);

		if (!e.target.elements.key.value) {
			console.log('ADD ITEM', !e.target.elements.key.value );
			dispatch(addTransaction({
				account: e.target.elements.account.value,
				fsc: e.target.elements.fsc.value,
				holder: e.target.elements.holder.value,
				amount: e.target.elements.amount.value,
			}))
			dispatch(setItem(emptyItem))
		} else {
			console.log('EDIT ITEM', !!e.target.elements.key.value );
			dispatch(editItem({
				account: e.target.elements.account.value,
				fsc: e.target.elements.fsc.value,
				holder: e.target.elements.holder.value,
				amount: e.target.elements.amount.value,
				key: e.target.elements.key.value
			}))
			dispatch(setItem(emptyItem))
		}

	}

	const handleChangeInput = (e,functionName) => {
		setFunction[functionName](e.target.value)
	}

	// console.log('Its transactionsList before rendering =>', transactionsList, item);

	return(
		<div style={{display:'inline-block', verticalAlign:'top'}}>
			<div className="top_part">
				<h1>Financial Transactions:</h1>
			</div>
			<form action="" onSubmit={handleSubmit}>
				<input  type="text" 
								value={account} 
								onChange={(e)=>{handleChangeInput(e, 'account')}} 
								name="account" 
								placeholder="Account Number"/> <br />

				<input type="text" 
							 value={fsc} 
							 onChange={(e)=>{handleChangeInput(e, 'fsc')}} 
							 name='fsc' 
							 placeholder="FSC" /> <br />

				<input  type="text" 
								value={holder}  
								onChange={(e)=>{handleChangeInput(e, 'holder')}} 
								name='holder' 
								placeholder="A/C Holder Name" /> <br />

				<input type="text" 
							  value={amount} 
								onChange={(e)=>{handleChangeInput(e, 'amount')}} 
								name='amount' 
								placeholder="Amount" /> <br />
				<input type="text" value={item.key} name='key'/>
				<input type="submit" name='button' value="Submit" /> <br />
			</form>
			<hr />
			<div>{account}</div>
			<div>{fsc}</div>
			<div>{holder}</div>
			<div>{amount}</div>
			<hr />
		</div>
	)
}

export default TransactionForm