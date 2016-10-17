// @flow

import React from 'react';
import { observer } from 'mobx-react';

import CSSModules from 'react-css-modules';
import styles from './style.less';

@observer
@CSSModules(styles)
export default class Staff extends React.Component {
    props: {
        game: Object,
    };

    render () {
        const { game } = this.props;
        const Icon = (
            <img
                styleName='svgicon'
                src={ game.image }
            />
        );

        return (
            <span styleName='genre'>
                <span styleName='icon'>

                    { Icon }

                </span>
                <span styleName='label'>
                    { game.name }
                </span>
            </span>
        )
    }
}
