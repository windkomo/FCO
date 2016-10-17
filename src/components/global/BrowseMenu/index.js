// @flow

import React from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

import type { MenuEntry } from '../../../types/types';

import CSSModules from 'react-css-modules';
import styles from './style.less';

@observer
@CSSModules(styles)
export class BrowseMenu extends React.Component {
    props: {
        entries: Array<MenuEntry>,
        icon: string
    };

    render () {
        const { entries = [], icon } = this.props;

        return (
            <ul styleName='list'>
                { entries.map(entry =>
                        <Entry
                            entry={ entry }
                            key={ entry.link }
                            icon={ icon }
                        />) }
            </ul>
        )
    }
}

@observer
@CSSModules(styles)
export class Entry extends React.Component {
    props: {
        entry: MenuEntry,
        icon: string
    };

    render () {
        const { label, link } = this.props.entry;
        const { icon } = this.props;

        return (
            <li styleName='entry'>
                <Link to={ link }>
                    <FontAwesome
                        styleName='icon'
                        name={ icon }
                    />
                    { label }
                </Link>
            </li>
        )
    }
}
