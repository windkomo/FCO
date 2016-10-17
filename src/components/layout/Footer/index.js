// @flow

import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable, runInAction } from 'mobx';
import axios from 'axios';

import Button from '../../global/Button';
import SocialBar from '../../global/SocialBar';
import { BrowseMenu } from '../../global/BrowseMenu';
import ContributorList from '../../global/ContributorList';
import Title from '../../global/Title';

import type { User } from '~/types/types';

import CSSModules from 'react-css-modules';
import styles from './style.less';

@observer
@CSSModules(styles)
export default class Footer extends Component {
    @observable contributors: Array<User> = [];

    async loadContributors () {
        const { data: {
            data: data
        } } = await axios.post('http://localhost:4001/graphql', {
            query: `
            {
                users {
                    id,
                    name,
                    slug,
                    avatar {
                        secure_url
                    }
                }
            }
            `
        });

        runInAction( () => {
            this.contributors = data.users;
        });
    }

    componentDidMount () {
        this.loadContributors();
    }

    render() {
        const entries = [
            { label: 'Home', link: '/' },
            { label: 'Reviews', link: '/reviews' },
            { label: 'Forum', link: '/forum' },
            { label: 'Staff', link: '/staff' },
        ];

        const platforms = [
            { label: 'Super Famicom', link: '/platforms/super-famicom' },
            { label: 'Famicom', link: '/famicom' },
            { label: 'PC Engine', link: '/platforms/pc-engine' },
            { label: 'Mega Drive', link: '/platforms/megadrive' },
        ];

        return (
            <div styleName='footer'>
                <footer>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-8'>
                                <h4>
                                    <Title
                                        boldText='ABOUT'
                                        normalText=' US'
                                    />
                                </h4>
                                <div styleName='content'>
                                    <img
                                        styleName='logo'
                                        src='../assets/images/logo.svg'
                                    />
                                    <p>
                                        { 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec leo sit amet leo lacinia rhoncus. Nunc luctus mauris nec tempus egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur pulvinar ut leo et ' }
                                    </p>
                                    <div styleName='button'>
                                        <Button
                                            label='CONTACT US'
                                        />
                                        <div styleName='social'>
                                            <SocialBar />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-8'>
                                <h4>
                                    <Title
                                        boldText='BROWSE'
                                    />
                                </h4>
                                <div styleName='content'>
                                    <div className='row'>
                                        <div className='col-md-12'>
                                            <BrowseMenu
                                                entries={ entries }
                                                icon='caret-right'
                                            />
                                        </div>
                                        <div className='col-md-12'>
                                            <BrowseMenu
                                                entries={ platforms }
                                                icon='gamepad'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-8'>
                                <h4>
                                    <Title
                                        boldText='OUR'
                                        normalText=' CONTRIBUTORS'
                                    />
                                </h4>
                                <div styleName='content'>
                                    <div styleName='contributors'>
                                        <ContributorList
                                            contributors={ this.contributors }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
};
