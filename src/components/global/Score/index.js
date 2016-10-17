// @flow

import React from 'react';
import { observer } from 'mobx-react';

import CSSModules from 'react-css-modules';
import styles from './style.less';

@observer
@CSSModules(styles)
export default class Score extends React.Component {
    props: {
        score: number,
        maxScore: number
    };

    render () {
        const { score, maxScore } = this.props;

        return (
            <span styleName='container'>
                <span styleName='text'>
                    <span styleName='score'>
                        { score }
                    </span>
                    <span styleName='max-score'>
                        { `/${ maxScore }` }
                    </span>
                </span>
            </span>
        )
    }
}
