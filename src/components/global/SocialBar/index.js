// @flow

import React from 'react';
import { observer } from 'mobx-react';
import FontAwesome from 'react-fontawesome';

import CSSModules from 'react-css-modules';
import styles from './style.less';

@observer
@CSSModules(styles)
export default class SocialBar extends React.Component {
    render () {
        return (
            <div>
                <FontAwesome
                    styleName='icon'
                    name='facebook'
                    size='2x'
                />
                <FontAwesome
                    styleName='icon'
                    name='twitter'
                    size='2x'
                />
                <FontAwesome
                    styleName='icon'
                    name='globe'
                    size='2x'
                />
            </div>
        )
    }
}
