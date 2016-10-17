// @flow

import React from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router';

import Markdown from '~/components/global/Markdown';

import type { User } from '../../../types/types';

import CSSModules from 'react-css-modules';
import styles from './style.less';

@observer
@CSSModules(styles)
export default class Contributor extends React.Component {
    props: {
        user: User,
        displayDetails?: boolean,
        noLink?: boolean,
        inline?: boolean,
        full?: boolean
    };

    render () {
        const { user, title, displayDetails, noLink, inline, full } = this.props;

        if (!user) {
            return null;
        }

        if (full) {
            return (
                <div styleName='contributor'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <Link to={ `/staff/${ user.slug }` }>
                                <img
                                    src={ user.avatar.secure_url }
                                    alt={ user.name }
                                    title={ user.name }
                                />
                            </Link>
                        </div>
                        <div className='col-md-20'>
                            <div>
                                <span styleName='title'>
                                    { title }
                                </span>
                                { noLink ? (
                                    <span styleName='name'>
                                        { user.name }
                                    </span>
                                ) : (
                                    <Link to={ `/staff/${ user.slug }` }>
                                        <span styleName='name'>
                                            { user.name }
                                        </span>
                                    </Link>
                                ) }
                            </div>
                            { user.description ? (
                                <Markdown
                                    content={ user.description.brief.md }
                                />
                            ) : null }
                        </div>
                    </div>
                </div>
            );
        }

        if (inline) {
            return (
                <div styleName='contributor'>
                    <img
                        src={ user.avatar.secure_url }
                        alt={ user.name }
                        title={ user.name }
                    />
                    <span styleName='name-inline'>
                        { user.name }
                    </span>
                </div>
            );
        }

        if (!displayDetails) {
            return (
                <div styleName='contributor'>
                    <Link to={ `/staff/${ user.slug }` }>
                         <img
                            src={ user.avatar.secure_url }
                            alt={ user.name }
                            title={ user.name }
                        />
                    </Link>
                </div>
            );
        }

        return (
            <div styleName='contributor'>
                <div className='row'>
                    <div className='col-md-6'>
                        <Link to={ `/staff/${ user.slug }` }>
                            <img
                                src={ user.avatar.secure_url }
                                alt={ user.name }
                                title={ user.name }
                            />
                        </Link>
                    </div>
                    <div className='col-md-18'>
                        <div>
                            <span styleName='title'>
                                { title }
                            </span>
                            { noLink ? (
                                <span styleName='name'>
                                    { user.name }
                                </span>
                            ) : (
                                <Link to={ `/staff/${ user.slug }` }>
                                    <span styleName='name'>
                                        { user.name }
                                    </span>
                                </Link>
                            ) }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
