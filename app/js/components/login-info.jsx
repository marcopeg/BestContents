
import React from 'react';
import Label from 'react-bootstrap/lib/Label';

export default class LoginInfo extends React.Component {
    
    static defaultProps = {
        uname: 'John Doe',
        onClick: null
    };

    render() {
        var { uname, onClick } = this.props;
        return (
            <h4 onClick={onClick}>
                <Label bsStyle="primary">{uname}</Label>
            </h4>
        );
    }
}
