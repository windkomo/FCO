/* @flow */

import React from 'react';
import { observer } from 'mobx-react';
import ReactTooltip from 'react-tooltip';

import CSSModules from 'react-css-modules';
import styles from './style.less';

@CSSModules(styles)
@observer
export default class Tooltip extends React.Component {
    props: {
        children?: HTMLElement,
        id: string
    };

    render () {
        return (
            <ReactTooltip
                { ...this.props }
                effect='solid'
            >
                { this.props.children }
            </ReactTooltip>
        );
    }
}
