
export const LOGIN_START = '@account@loginStart';
export const LOGIN_END = '@account@loginEnd';
export const LOGIN_RESET = '@account@loginReset';

export function loginStart() {
    return {
        type: LOGIN_START
    };
}

export function loginEnd(err, authData) {
    return {
        type: LOGIN_END,
        err,
        authData
    };
}

export function loginReset() {
    return {
        type: LOGIN_RESET
    };
}
