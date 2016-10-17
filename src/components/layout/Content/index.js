/* @flow */

import React from 'react';
import { observer } from 'mobx-react';
import UIStore from '~/stores/ui-store';

import CSSModules from 'react-css-modules';
import styles from './style.less';

@observer
@CSSModules(styles)
export default class Content extends React.Component {
    props: {
        children?: any
    };

    render () {
        const { isMenuMaximized } = UIStore;

        const classes = !isMenuMaximized && styles['content-larger'] || '';

        return (
            <div
                styleName='content'
                className={ classes }
            >
                { this.props.children }
            </div>
        )
    }
}
