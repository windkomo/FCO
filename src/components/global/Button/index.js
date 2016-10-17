// @flow

import React from 'react';
import { observer } from 'mobx-react';

import CSSModules from 'react-css-modules';
import styles from './style.less';

@observer
@CSSModules(styles)
export default class Button extends React.Component {
    render () {
        return (
            <button styleName='button'>
                { this.props.label }
            </button>
        )
    }
}
