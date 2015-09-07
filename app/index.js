import React from 'react';

// import ReactDOM from 'react-dom';

import { Router, Route } from 'react-router';
import { reduxRouteComponent } from 'redux-react-router';

import { initStore, getStore } from 'services/store';
import { initFirebase } from 'services/firebase';

import App from 'containers/app';
import HomePage from 'containers/home-page';
import Stream from 'containers/stream';
import Resource from 'containers/resource';

import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import SliderMonitor from 'redux-slider-monitor';

function makeRoutes() {
    return (
        <Route component={reduxRouteComponent(getStore())}>
            <Route component={App}>
                <Route path="/" component={HomePage} />
                <Route path="/stream/:streamId" component={Stream} />
                <Route path="/resource/:resourceId" component={Resource} />
            </Route>
        </Route>
    );
}

export function start(initialState, fb) {
    var BrowserHistory = require('react-router/lib/BrowserHistory').history;

    var store = initStore(initialState);
    var fbRef = initFirebase(fb);

    var router = (
        <Router history={BrowserHistory}>
            {makeRoutes()}
        </Router>
    );

    var debug;
    if (initialState.settings.debugPanel) {
        debug = (
            <DebugPanel top bottom right>
                <DevTools store={store} monitor={LogMonitor} />
            </DebugPanel>
        );
    }

    React.render((
        <div>
            {router}
            {debug}
        </div>
    ), document.getElementById('app'));
}

export function renderMarkup(initialState) {
    return '';
}
