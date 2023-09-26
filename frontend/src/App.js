import React, {useState, useEffect} from 'react'
import api from './Utilities/Api'
import Navbar from './Components/Navbar'
import Table from './Components/Table'

const App = () => {
	//Set the state
	const [transactions, setTransactions] = useState([])
	const [formData, setFormData] = useState({
		amount: '',
		category: '',
		description: '',
		date: '',
		is_income: false
	})

	//Create Functions
	const fetchTransactions = async () => {
		const response = await api.get('/transactions/');
		setTransactions(response.data)
	};

	// Runs once to populate transactions state
	useEffect(() => {
		fetchTransactions();
	}, [])

	// Updates the form data and updates the state 
	const handleInputChange = async (event) => {
		const value = event.target.value === 'checkbox' ? event.target.checked : event.target.value;
		setFormData({
			...formData,
			[event.target.name]: value,
		});
	};

	// Handles the form submission including sending data to the api
	const handleFormSubmit = async (event) => {
		event.preventDefault();
		await api.post('/transactions/', formData);
		fetchTransactions();
		setFormData({
			amount: '',
			category: '',
			description: '',
			date: '',
			is_income: false,
		});
	}

	//Return site content
	return (
		<>
			<Navbar/>
			<div className='container'>
				<form onSubmit={handleFormSubmit}>
					<div className='mb-3 mt-3'>
						<label htmlFor='amount' className='form-label'>
							Amount
						</label>
						<input id='amount' name='amount' onChange={handleInputChange} value={formData.amount} type='text' className='form-control' />
					</div>
					<div className='mb-3 mt-3'>
						<label htmlFor='category' className='form-label'>
							Category
						</label>
						<input id='category' name='category' onChange={handleInputChange} value={formData.category} type='text' className='form-control' />
					</div>
					<div className='mb-3 mt-3'>
						<label htmlFor='description' className='form-label'>
							Description
						</label>
						<input id='description' name='description' onChange={handleInputChange} value={formData.description} type='text' className='form-control' />
					</div>
					<div className='mb-3 mt-3'>
						<label htmlFor='date' className='form-label'>
							Date
						</label>
						<input id='date' name='date' onChange={handleInputChange} value={formData.date} type='date' className='form-control' />
					</div>
					<div className='mb-3 mt-3'>
						<label htmlFor='income' className='form-label'>
							Income
						</label>
						<input id='income' name='income' onChange={handleInputChange} value={formData.is_income} type='checkbox' className='form-checkbox ms-2' />
					</div>
					<button onClick={handleFormSubmit} className='btn btn-primary'>Submit</button>
				</form>
				<Table data={transactions}/>
			</div>

			
		</>
	);
}

export default App;
