
import React from 'react';
import LoginButton from 'components/login-button';
import LoginInfo from 'components/login-info';

export default class LoginPanel extends React.Component {
    
    static defaultProps = {
        isAuthenticated: false,
        isWorking: false,
        onLogin: $=> {},
        onLogout: $=> {}
    };

    render() {
        var { isAuthenticated, isWorking, onLogin, onLogout } = this.props;

        if (isAuthenticated) {
            return (
                <LoginInfo onClick={onLogout} />
            );
        } else {
            return (
                <LoginButton onClick={onLogin} isWorking={isWorking} />
            );
        }
    }
}
