import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()
    const handleIncrement = () => dispatch({
        type: 'INCREMENT'
    })
    return (
        <>
            <h1>Counter: {counter}</h1>
            <button onClick={handleIncrement}>
                Increment
            </button>
        </>
    )
}

export default Counter
