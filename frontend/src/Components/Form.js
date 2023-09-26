import React from 'react'

export default function Form(handleSubmit, formData, handleInputChange) {
    // Updates the form data and updates the state 
	
    return (
    <>
    <div className='container'>
        <form onSubmit={handleSubmit}>
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
            <button className='btn btn-primary'>Submit</button>
        </form>
    </div>
    </>
    )
}
