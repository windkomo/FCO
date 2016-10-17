// @flow

import React from 'react';
import { observer } from 'mobx-react';
import debounce from 'lodash/debounce';

import FontAwesome from 'react-fontawesome';

import CSSModules from 'react-css-modules';
import styles from './style.less';

@observer
@CSSModules(styles)
export default class SearchInput extends React.Component {
    props: {
        callback: () => void,
        placeholder: string,
        icon: boolean
    };

    delayedCallback: () => void;

    constructor () {
        super();
    }

    componentWillMount () {
        this.delayedCallback = debounce((event) => {
            this.props.callback(event.target.value);
        }, 500);
    }

    handleChange (event: Object) {
        event.persist();
        this.delayedCallback(event);
    }

    render () {
        const { icon } = this.props;
        const Icon = icon ? (
            <span
                className='input-group-addon'
                styleName='search-icon'
            >
                <FontAwesome
                    name='search'
                />
            </span>
        ) : null;

        return (
            <div className='input-group'>
                <input
                    styleName='search'
                    className='form-control'
                    type='text'
                    placeholder={ this.props.placeholder }
                    onChange={ this.handleChange.bind(this) }
                />
                { Icon }
            </div>
        )
    }
}
