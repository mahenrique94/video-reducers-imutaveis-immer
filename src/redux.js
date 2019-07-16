import { createStore } from "redux";
import produce from 'immer'

const INITIAL_STATE = {
    counter: 0
}

const reducer = produce((draft, action) => {
    switch (action.type) {
        case 'INCREMENT':
            draft.counter++
    }
}, INITIAL_STATE)

const store = createStore(reducer)

export { store }
