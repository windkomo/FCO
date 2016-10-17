// @flow

import React from 'react';
import { observer } from 'mobx-react';

import CSSModules from 'react-css-modules';
import styles from './style.less';

@observer
@CSSModules(styles)
export default class Flag extends React.Component {
    props: {
        country: string
    };

    render () {
        return (
            <div
                styleName={ `flag-${ this.props.country }` }
            />
        )
    }
}
