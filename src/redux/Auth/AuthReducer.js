import { BEGIN_LOGIN, SUCCESS_LOGIN, FAILURE_LOGIN } from "./AuthActions";

const initialState = {
    beginLogin: false,
    succesLogin: false,
    failureLogin: false,
    userData: [],
    err: null
};


export default (state = initialState, action) => {
    switch (action.type) {
        case BEGIN_LOGIN:
            return {
                ...state,
                beginLogin: true,
                failureLogin: false
            };
        case SUCCESS_LOGIN:
            return {
                ...state,
                beginLogin: false,
                succesLogin: true,
                failureLogin: false,
                userData: action.payload
            };
        case FAILURE_LOGIN:
            return {
                ...state,
                beginLogin: false,
                succesLogin: false,
                failureLogin: true,
                err: action.payload
            };
        default:
            return state;
    }
};