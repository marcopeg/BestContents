import React from 'react';
import { connect } from 'react-redux';

import { changePage } from 'actions/router';
import Menu from 'components/menu';

@connect(state => state)
export default class App extends React.Component {
    navigate = (uri) => {
        console.log('uri', uri);
        var { dispatch } = this.props;
        dispatch(changePage(uri));
    }
    render() {
        var { pages, params } = this.props;
        return (
            <div className="container">
                <Menu navigate={this.navigate} />
                <hr />
                {this.props.children}
            </div>
        );
    }
}
