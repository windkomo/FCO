// @flow

import React from 'react';
import { observer } from 'mobx-react';
import { Element } from 'react-scroll';

import type { User } from '~/types/types';

import Contributor from '../Contributor';

import CSSModules from 'react-css-modules';
import styles from './style.less';

@observer
@CSSModules(styles)
export default class ContributorList extends React.Component {
    props: {
        contributors: Array<User>,
        displayDetails?: boolean,
        anchor?: boolean,
        full?: boolean
    };

    render () {
        const { contributors, displayDetails, anchor, full } = this.props;

        return (
            <ul styleName={ full ? 'full-list' : 'list' }>
                { contributors.map( contributor =>
                    <li
                        key={ contributor.id }
                    >
                        { anchor ? (
                            <Element
                                name={ contributor.slug }
                            >
                                <Contributor
                                    user={ contributor }
                                    displayDetails={ displayDetails }
                                    full={ full }
                                />
                            </Element>
                        ) : (
                            <Contributor
                                user={ contributor }
                                displayDetails={ displayDetails }
                                full={ full }
                            />
                        ) }
                    </li>
                ) }
            </ul>
        )
    }
}
