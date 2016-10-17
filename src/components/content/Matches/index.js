// @flow

import React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

import CSSModules from 'react-css-modules';
import styles from './style.less';

@observer
@CSSModules(styles)
export default class Home extends React.Component {
    @observable matches = [];

    async loadMatches () {
        this.matches = [{
            title: ' Session Guilty',
            player: {
                'name': 'komo'
            },
            guest: {
                nb: 5,
                max: 10
            },
            details: 'une partie sympa entre doseur de guilty',
            location: {
                country: 'France',
                town: 'Paris'
            },
            icon: 'example.ico'
        }, {
            title: ' Session Guilty',
            player: {
                'name': 'komo'
            },
            guest: {
                nb: 5,
                max: 10
            },
            details: 'une partie sympa entre doseur de guilty',
            location: {
                country: 'France',
                town: 'Paris'
            },
            icon: 'example.ico'
        }
];
    }

    componentDidMount () {
        this.loadMatches();
    }

    render () {
        return (
            <div>
                <h4>
                    Parties
                </h4>
            </div>
        )
    }
}
