// @flow

import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router';

import FontAwesome from 'react-fontawesome';

import CSSModules from 'react-css-modules';
import styles from './style.less';

import UIStore from '~/stores/ui-store';

@observer
@CSSModules(styles)
export default class Header extends Component {
    render () {
        const { isMenuMaximized } = UIStore;

        const classes = [
            !isMenuMaximized && styles['header-larger'] || ''
        ].join(' ');

        return (
            <div
                styleName='header'
                className={ classes }
            >
                <ul styleName='notifications'>
                    <li
                        data-tip
                        data-for='notification-tooltip'
                    >
                        <FontAwesome
                            styleName='notifications-icon'
                            name='bell-o'
                        />
                    </li>
                    <li>
                        <Link to='/messages'>
                            <FontAwesome
                                styleName='notifications-icon'
                                name='envelope-o'
                            />
                        </Link>
                    </li>
                </ul>

                <div styleName='container-hidden'>
                </div>
            </div>
        );
    }
};
