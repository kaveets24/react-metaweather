import React, { useState } from "react";
import useForm from "./hooks";


const doSomething = () => {
    console.log("Form submitted!")
}
const Form = () => {
    const {inputs, handleInputChange, handleSubmit} = useForm(doSomething);

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="zipcode"></label>
            <input onChange={handleInputChange} id="zipcode" name="zipcode" type="text" placeholder="Enter your ZIP code" value={inputs.zipcode}></input>
            <button type="submit">Go</button>

        </form>
    )
};

export default Form;