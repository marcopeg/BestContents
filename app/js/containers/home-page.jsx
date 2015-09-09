import React from 'react';
import { connect } from 'react-redux';

@connect(state => state)
export default class HomePage extends React.Component {
    render() {
        // console.log(this.props);
        return <div>home page</div>;
    }
}
