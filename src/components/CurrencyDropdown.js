import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const CurrencyDropdown = () => {
    const { dispatch } = useContext(AppContext);

    const setCurrency = (symbol) => {
        dispatch({
            type: "CHG_CURRENCY",
            payload: symbol
        })
    }

    return (
        <>
            <select name="currency" id="currency" class="form-select" onChange={(event) => setCurrency(event.target.value)}>
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
            </select>
        </>
    )
}

export default CurrencyDropdown;