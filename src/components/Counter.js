import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
    decrementCounter,
    incrementCounter,
    resetCounter,
} from "../redux/actions/counterAction";

const Counter = () => {
    const count = useSelector((state) => state.count);

    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(incrementCounter());
    };

    const handleDecrement = () => {
        dispatch(decrementCounter());
    };

    const handleReset = () => {
        dispatch(resetCounter());
    };

    return (
        <div>
            <h1>Counter</h1>
            <h3>Count : {count}</h3>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default Counter;
