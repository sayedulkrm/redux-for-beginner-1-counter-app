import {
    DECREMENT_COUNTER,
    INCREMENT_COUNTER,
    RESET_COUNTER,
} from "../constants/counterConst";

const initialCounterState = {
    count: 0,
};

export const counterReducer = (state = initialCounterState, action) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return {
                ...state,
                count: state.count + 1,
            };

        case DECREMENT_COUNTER:
            return {
                ...state,
                count: state.count - 1,
                // count: state.count > 0 ? state.count - 1 : 0,
            };

        case RESET_COUNTER:
            return {
                ...state,
                count: 0,
            };

        default:
            return state;
    }
};

// ===================== Ignore ====================

// import {
//     DECREMENT_COUNTER,
//     INCREMENT_COUNTER,
//     RESET_COUNTER,
// } from "../constants/counterConst";

// const initialCounterState = {
//     count: 0,
// };

// const decrementCounter = (count) => {
//     return count > 0 ? count - 1 : 0;
// }

// export const counterReducer = (state = initialCounterState, action) => {
//     switch (action.type) {
//         case INCREMENT_COUNTER:
//             return {
//                 ...state,
//                 count: state.count + 1,
//             };

//         case DECREMENT_COUNTER:
//             return {
//                 ...state,
//                 count: decrementCounter(state.count),
//             };

//         case RESET_COUNTER:
//             return {
//                 ...state,
//                 count: 0,
//             };

//         default:
//             return state;
//     }
// };
