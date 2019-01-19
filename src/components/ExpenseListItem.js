import React from 'react';
import {connect } from 'react-redux';
import {removeExpense} from '../actions/expenses'

const ExpenseListItem = ({description, id, dispatch, amount, createdAt}) => {
    return (
        <div>

            <h1>{description} </h1>
            <h3>{amount - createdAt} </h3>
            <button onClick = {()=>{
                dispatch(removeExpense({id}))
            }}>Remove</button>
        </div>
    )
}


export default connect()(ExpenseListItem);