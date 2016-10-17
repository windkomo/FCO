// @flow

import React, { Component } from 'react';
import { observer } from 'mobx-react';

import CSSModules from 'react-css-modules';
import styles from './style.less';

@observer
@CSSModules(styles)
export default class Title extends Component {
    props: {
        boldText: string,
        normalText?: string
    };

    render() {
        const { boldText, normalText } = this.props;

        return (
            <span>
                <span styleName='bold'>
                    { boldText }
                </span>
                <span>
                    { normalText }
                </span>
            </span>
        );
    }
};
