// @flow

import React, { Component } from 'react';
import { Link } from 'react-router';
import { observer } from 'mobx-react';

import FontAwesome from 'react-fontawesome';

import CSSModules from 'react-css-modules';
import styles from './style.less';

import Tooltip from '~/components/global/Tooltip';
import type { User } from '~/types';

@observer
@CSSModules(styles)
export default class UserPanel extends Component {
    props: {
        user: User,
        maximized: boolean
    };

    render() {
        const { user, maximized } = this.props;

        return (
            <Link
                styleName={ maximized ? 'user-panel' : 'user-panel-hidden' }
                to='/me'
                data-tip
                data-for='userpanel-tooltip'
            >
                { !maximized ? (
                    <Tooltip
                        id='userpanel-tooltip'
                        class={ styles.tooltip }
                        place='right'
                    >
                        <span>
                            { 'Mon profil' }
                        </span>
                    </Tooltip>
                ) : null }
                <img
                    styleName='user-avatar'
                    src={ user.avatar }
                />
                <span styleName={ maximized ? 'user-name' : 'user-name-hidden' }>{ user.name }</span>
                <FontAwesome
                    styleName='dropdown-icon'
                    name='chevron-down'
                />
            </Link>
        );
    }
};
