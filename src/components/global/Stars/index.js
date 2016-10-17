// @flow

import React from 'react';
import { observer } from 'mobx-react';
import range from 'lodash/range';
import FontAwesome from 'react-fontawesome';

import CSSModules from 'react-css-modules';
import styles from './style.less';

@observer
@CSSModules(styles)
export default class Stars extends React.Component {
    props: {
        rating: number,
        maxRating: number
    };

    render () {
        const { rating, maxRating } = this.props;
        const ratings = range(1, maxRating + 1);

        return (
            <ul styleName='stars'>
                { ratings.map( r => (
                    <li
                        key={ r }
                        styleName={ r <= rating ? 'filled-star' : 'star' }
                    >
                        <FontAwesome
                            name={ r <= rating ? 'star' : 'star-o' }
                        />
                    </li>
                )) }
            </ul>
        )
    }
}
