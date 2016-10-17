// @flow

import React from 'react';
import { observer } from 'mobx-react';

import CSSModules from 'react-css-modules';
import styles from './style.less';

@observer
@CSSModules(styles)
export default class Home extends React.Component {
    componentDidMount () {
    }

    render () {
        return (
            <div>
                <h4>
                    HOME
                </h4>
            </div>
        )
    }
}
