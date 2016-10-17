// @flow

import React from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-scroll';

import CSSModules from 'react-css-modules';
import styles from './style.less';

@observer
@CSSModules(styles)
export default class SectionScroller extends React.Component {
    props: {
        sections: Array<any>
    };

    render () {
        const { sections } = this.props;

        return (
            <div styleName='container'>
                <div
                    className='btn-group btn-group-justified'
                    role='group'
                >
                    { sections.map( s  =>
                        <Link
                            activeClass={ styles.active }
                            styleName='link'
                            className='btn'
                            to={ s.name }
                            spy={ true }
                            smooth={ true }
                            duration={ 500 }
                            offset={ s.label === 'game' ? 0 : -50 }
                            key={ s.name }
                        >
                            { s.label }
                        </Link>
                    ) }
                </div>
            </div>
        )
    }
}
