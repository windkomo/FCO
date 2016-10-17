import React from 'react';
import { render } from 'react-dom';
import { useStrict } from 'mobx';

import { AppContainer as HotReloader } from 'react-hot-loader';

import './styles/index.less';

import Router from './components/Router';


useStrict(true);

render(
    <HotReloader>
        <Router />
    </HotReloader>,
    document.getElementById('root')
);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./components/Router', () => {
        const Router = require('./components/Router').default;

        render(
            <HotReloader>
                <Router />
            </HotReloader>,
            document.getElementById('root')
        );
    });
}
