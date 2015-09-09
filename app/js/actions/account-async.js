
import { loginStart, loginEnd, loginReset } from 'actions/account';

export function login(vendor) {
    return (dispatch, getState) => {
        console.log('init login', vendor);
        dispatch(loginStart());
        setTimeout($=> dispatch(loginEnd('foo', {uname:'foo'})), 1000);
    };
}

export function logout() {
    return (dispatch, getState) => {
        console.log('logout');
        dispatch(loginReset());
    };
}
