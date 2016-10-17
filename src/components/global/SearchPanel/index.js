// @flow

import React from 'react';
import { observer } from 'mobx-react';

import CSSModules from 'react-css-modules';
import styles from './style.less';

@observer
@CSSModules(styles)
export default class SearchPanel extends React.Component {
    render () {
        return (
            <div styleName='search-panel'>
                { this.props.children }
            </div>
        )
    }
}
