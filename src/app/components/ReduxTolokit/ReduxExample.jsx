import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./counterSlice";

function ReduxExample() {
    const dispatch = useDispatch(); // trigger actions
    const count = useSelector((state) => state.counter.value); // access store

    return (
        <div>
            <h3>My App | Count: {count}</h3>

            <button onClick={() => dispatch(increment())}>Increase</button>
            <button onClick={() => dispatch(decrement())}>Decrease</button>
        </div>
    );
}

export default Buttons;
