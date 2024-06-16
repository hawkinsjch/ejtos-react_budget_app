import React, { useContext } from "react";
import { TiDelete } from 'react-icons/ti';
import { AppContext } from "../context/AppContext";
import plus from "../plus.png"
import minus from "../minus.png"

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id
        })
    }

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10
        }

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        })
    }
    
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10
        }

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        })
    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency + props.cost}</td>
            <td>
                <button class="btn" onClick={event => increaseAllocation(props.name)}><img width="30px" height="30px" src={plus} alt="Inc"/></button>
            </td>
            <td>
                <button class="btn" onClick={event => decreaseAllocation(props.name)}><img width="30px" height="30px" src={minus} alt="Inc"/></button>
            </td>
            <td>
                <TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete>
            </td>
        </tr>
    )
}

export default ExpenseItem;