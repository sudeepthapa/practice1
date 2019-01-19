import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpense from '../selectors/expenses';
const ExpenseList = (props)=>(
    <div>
        {props.expenses.map((expense)=>{
            return <ExpenseListItem {...expense} key={expense.id}/> 
        })}
    </div>
);

const mapStateToProps = (state) =>{
    return{
        expenses:selectExpense(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList);