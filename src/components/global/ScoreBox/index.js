// @flow

import React from 'react';
import { observer } from 'mobx-react';
import FontAwesome from 'react-fontawesome';

import Markdown from '~/components/global/Markdown';

import CSSModules from 'react-css-modules';
import styles from './style.less';

@observer
@CSSModules(styles)
export default class Score extends React.Component {
    props: {
        score: number,
        icon: string,
        category: string,
        text: number,
        final?: boolean
    };

    render () {
        const { score, icon, category, text, final } = this.props;

        if (final) {
            return (
                <div styleName='container'>
                    <div
                        className='row'
                    >
                    <div className='col-md-24'>
                        <div styleName='final-score'>
                            { category }
                        </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-24'>
                            <div styleName='final-comment'>
                                <Markdown
                                    styleName='text'
                                    content={ text }
                                />
                            { score ? (
                                <div styleName='bar-background'>
                                    <div
                                        styleName='bar'
                                        style={ { width: `${ score }%` } }
                                    >
                                        <span styleName='score'>
                                            { `${ score }/100` }
                                        </span>
                                    </div>
                                </div>
                            ) : null }
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div styleName='container'>
                <div
                    className='row'
                >
                    <div
                        className='col-md-3'
                    >
                        <div styleName='category'>
                            <div styleName='icon'>
                                <FontAwesome
                                    name={ icon }
                                />
                            </div>
                            <span styleName='label'>
                                { category }
                            </span>
                        </div>
                    </div>
                    <div className='col-md-21'>
                        <div styleName='comment'>
                            <Markdown
                                styleName='text'
                                content={ text }
                            />
                        { score ? (
                            <div styleName='bar-background'>
                                <div
                                    styleName='bar'
                                    style={ { width: `${ score }%` } }
                                >
                                    <span styleName='score'>
                                        { `${ score }/100` }
                                    </span>
                                </div>
                            </div>
                        ) : null }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
