// @flow

import React, { Component } from 'react';
import { RouteTransition } from 'react-router-transition';
import DevTools from 'mobx-react-devtools';
import { observer } from 'mobx-react';

import Content from '~/components/layout/Content';
import Header from '~/components/layout/Header';
import Menu from '~/components/layout/Menu';

@observer
export default class App extends Component {
    render() {
        return (
            <div>
                <DevTools position={{ bottom: 0, left: 46 }} />
                <Header />
                <Menu />
                <Content>
                    <RouteTransition
                        pathname={ this.props.location.pathname }
                        atEnter={{ opacity: 0 }}
                        atLeave={{ opacity: 2 }}
                        atActive={{ opacity: 1 }}
                        mapStyles={ styles => {
                            if (styles.opacity > 1) {
                                return { display: 'none' }
                            }

                            return { opacity: styles.opacity }
                        }}
                    >
                        { this.props.children }
                    </RouteTransition>
                </Content>
            </div>
        )
    }
}
