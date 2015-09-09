import React from 'react';
import { connect } from 'react-redux';

import { changePage } from 'actions/router';
import { login, logout } from 'actions/account-async';

import Menu from 'components/menu';
import LoginPanel from 'components/login-panel';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';


@connect(state => state)
export default class App extends React.Component {
    
    navigate = (uri) => {
        var { dispatch } = this.props;
        dispatch(changePage(uri));
    }

    render() {

        var { account, dispatch } = this.props;

        return (
            <Grid>
                <Row style={{marginTop:20}}>
                    <Col sm={8}>
                        <Menu navigate={this.navigate} />
                    </Col>
                    <Col sm={4} className="text-right">
                        <LoginPanel 
                            isWorking={account.isWorking}
                            isAuthenticated={account.isAuthenticated}
                            onLogin={$=> dispatch(login('twitter'))} 
                            onLogout={$=> dispatch(logout())}/>
                    </Col>
                </Row>
                <hr />
                {this.props.children}
            </Grid>
        );
    }
}
