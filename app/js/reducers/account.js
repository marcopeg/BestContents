
import { LOGIN_RESET, LOGIN_START, LOGIN_END } from 'actions/account';

const initialState = {
    isAuthenticated: false,
    isWorking: false,
    err: null,
    authData: null
};

export default function accountReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_RESET:
            return { ...state, 
                isAuthenticated: false,
                isWorking: false,
                err: null,
                authData: null
            };
        case LOGIN_START:
            return { ...state, 
                isAuthenticated: false,
                isWorking: true,
                err: null,
                authData: null
            };
        case LOGIN_END:
            return { ...state, 
                isAuthenticated: action.err === null && action.authData !== null,
                isWorking: false,
                err: action.err,
                authData: action.authData
            };
        default:
            return state;
    }
}
