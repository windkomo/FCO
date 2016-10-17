// @flow

import React, { Component } from 'react';
import { observer } from 'mobx-react';

import CSSModules from 'react-css-modules';
import styles from './style.less';

@observer
@CSSModules(styles)
export default class SearchLetter extends Component {
    props: {
        letter: string,
        handleClick: () => void,
        selected: boolean
    };

    render() {
        const { letter, handleClick, selected } = this.props;

        return (
            <span styleName={ selected ? 'selected' : 'letter'}>
                <a
                    role='button'
                    onClick={ handleClick }
                >
                    { letter }
                </a>
            </span>
        );
    }
};
