import React, { useContext, useState} from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
    const { budget, dispatch, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    
    const totalExpenses = expenses.reduce(
        (total, item) => {
            return (total = total + item.cost);
        },
        0
    );

    const handleBudgetChange = (event) => {
        const inputBudget = event.target.value

        if (inputBudget > 20000) {
            alert(`The value cannot exceed ` + currency + `20,000`);
            return;
        }
        else if (inputBudget < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending");
            return;
        }

        setNewBudget(inputBudget);

        // Not in original Lab
        dispatch({
            type: 'SET_BUDGET',
            payload: inputBudget
        })
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type="number" step="10" max="20000" min={totalExpenses} value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    )
}

export default Budget;