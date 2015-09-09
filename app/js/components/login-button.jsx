
import React from 'react';
import Button from 'react-bootstrap/lib/Button';

export default class LoginButton extends React.Component {
    
    static defaultProps = {
        isWorking: false,
        onClick: $=> {}
    };

    onClick = (e) => {
        e.preventDefault();
        e.target.blur();
        this.props.onClick();
    }

    render() {

        var text = this.props.isWorking ? '...' : 'Login with Twitter';

        return (
            <Button 
                bsStyle="primary"
                onClick={this.onClick}
                children={text} />
        );
        
    }
}
