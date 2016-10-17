// @flow

import React, { Component } from 'react';
import { Link } from 'react-router';
import { computed } from 'mobx';
import { observer } from 'mobx-react';

import FontAwesome from 'react-fontawesome';

import CSSModules from 'react-css-modules';
import styles from './style.less';

import Tooltip from '~/components/global/Tooltip';
// import UserPanel from '../UserPanel'
import UIStore from '~/stores/ui-store';

type Props = {
    location: Object
};

@observer
@CSSModules(styles)
export default class Menu extends Component {
    props: Props

    resizeHandler: Function;

    @computed get location(): Object {
        return this.props.location;
    }

    constructor (props: Props) {
        super(props);
        this.resizeHandler = UIStore.updateDimensions.bind(UIStore, window);
    }

    componentWillMount () {
        this.resizeHandler();
    }

    componentDidMount () {
        window.addEventListener('resize', this.resizeHandler);
    }

    componentWillUnmount () {
        window.removeEventListener('resize', this.resizeHandler);
    }

    renderTooltip (id: string, label: string) {
        return (
            <Tooltip
                id={ id }
                class={ styles.tooltip }
                place='right'
            >
                <span>
                    { label }
                </span>
            </Tooltip>
        );
    }

    render() {
        const { isMenuMaximized, toggleMenu } = UIStore;
        const activeStyle = styles['active-menu-link']

        return (
            <div styleName={ isMenuMaximized ? 'menu' : 'menu-minimized' }>
                <div styleName={ isMenuMaximized ? 'menu-header' : 'menu-header-hidden' }>
                    <a
                        styleName='nav-toggle'
                        onClick={ toggleMenu.bind(UIStore) }
                    >
                        <FontAwesome
                            styleName='menu-header-icon'
                            name='bars'
                        />
                    </a>
                </div>

                <div styleName={ isMenuMaximized ? 'menu-user-panel' : 'menu-user-panel-hidden' }>
                    {/* <UserPanel
                        user={ me }
                        maximized={ isMenuMaximized }
                    /> */}
                </div>

                <ul styleName={ isMenuMaximized ? 'main-nav' : 'main-nav-hidden' }>
                    <li>
                        { !isMenuMaximized ? this.renderTooltip('dashboard-tooltip', 'Tableau de bord') : null }
                        <Link
                            to='/dashboard'
                            styleName='menu-link'
                            activeClassName={ activeStyle }
                            data-tip
                            data-for='dashboard-tooltip'
                        >
                            <FontAwesome
                                styleName='menu-icon'
                                name='dashboard'
                            />
                            <span styleName={ isMenuMaximized ? 'nav-label' : 'nav-label-hidden' }>
                                { 'Tableau de bord' }
                            </span>
                        </Link>
                    </li>
                    <li>
                        { !isMenuMaximized ? this.renderTooltip('matches-tooltip', 'Parties') : null }
                        <Link
                            to='/matches'
                            styleName='menu-link'
                            activeClassName={ activeStyle }
                            data-tip
                            data-for='matches-tooltip'
                        >
                            <FontAwesome
                                styleName='menu-icon'
                                name='gamepad'
                            />
                            <span styleName={ isMenuMaximized ? 'nav-label' : 'nav-label-hidden' }>
                                { 'Parties' }
                            </span>
                        </Link>
                    </li>
                    <li>
                        { !isMenuMaximized ? this.renderTooltip('communities-tooltip', 'Communautés') : null }
                        <Link
                            to='/communities'
                            styleName='menu-link'
                            activeClassName={ activeStyle }
                            data-tip
                            data-for='communities-tooltip'
                        >
                            <FontAwesome
                                styleName='menu-icon'
                                name='group'
                            />
                            <span styleName={ isMenuMaximized ? 'nav-label' : 'nav-label-hidden' }>
                                { 'Communautés' }
                            </span>
                        </Link>
                    </li>
                    <li>
                        { !isMenuMaximized ? this.renderTooltip('stats-tooltip', 'Statistiques') : null }
                        <Link
                            to='/stats'
                            styleName='menu-link'
                            activeClassName={ activeStyle }
                            data-tip
                            data-for='stats-tooltip'
                        >
                            <FontAwesome
                                styleName='menu-icon'
                                name='bar-chart'
                            />
                            <span styleName={ isMenuMaximized ? 'nav-label' : 'nav-label-hidden' }>
                                { 'Statistiques' }
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
};
