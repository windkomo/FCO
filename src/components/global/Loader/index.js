// @flow

import React, { Component } from 'react';
import { observer } from 'mobx-react';

import UIStore from '../../../stores/ui-store';

import CSSModules from 'react-css-modules';
import styles from './style.less';

@observer
@CSSModules(styles)
export default class Loader extends Component {
    render() {
        const { isLoading } = UIStore;

        return <div styleName={ isLoading ? 'loading' : 'loader' }>
            <img
                src='../assets/images/logo-small.svg'
            />
        </div>;
    }
};
