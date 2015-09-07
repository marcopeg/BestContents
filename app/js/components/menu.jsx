import React from 'react';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import Button from 'react-bootstrap/lib/Button';

export default class Menu extends React.Component {
    static defaultProps = {
        navigate: null
    };
    render() {
        var { navigate } = this.props;
        return (
            <div style={{marginTop:20}}>
                <ButtonGroup>
                    <Button onClick={$=> navigate('')}>Home</Button>
                    <Button onClick={$=> navigate('stream/1')}>Stream</Button>
                    <Button onClick={$=> navigate('resource/1')}>Resource</Button>
                </ButtonGroup>
            </div>
        );
    }
}
