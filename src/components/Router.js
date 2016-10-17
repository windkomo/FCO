import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory, applyRouterMiddleware } from 'react-router';
import { useScroll } from 'react-router-scroll';

import App from '~/components/App';
import Home from '~/components/content/Home';

export default class extends Component {
    render() {
        return (
            <Router
                history={ browserHistory }
                render={ applyRouterMiddleware(useScroll()) }
            >
                <Route
                    path='/'
                    component={ App }
                >
                    <IndexRoute
                        component={ Home }
                    />
                </Route>
            </Router>
        );
    }
}
