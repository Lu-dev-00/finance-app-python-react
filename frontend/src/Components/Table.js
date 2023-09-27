import React from 'react'

export default function Table(props) {
  return (
    <>
         <table className='table table-striped table-bordered table-hover mt-3 table-responsive'>
            <thead>
                <tr>
                    <th>Amount</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Income?</th>
                    <th>Date</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map((transaction) => (
                    <tr key={transaction.id}>
                        <td>£{transaction.amount}</td>
                        <td>{transaction.category}</td>
                        <td>{transaction.description}</td>
                        <td>{transaction.is_income ? 'Yes' : 'No'}</td>
                        <td>{transaction.date}</td>
                        <td><button id={transaction.id} className='btn btn-primary' onClick={props.delete}>Delete</button></td>
                    </tr>
                ))}
            </tbody>
         </table>
    </> 
  )
}
