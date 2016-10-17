// @flow

import React from 'react';
import { observer } from 'mobx-react';
import { observable, runInAction } from 'mobx';
import Select from 'react-select';
import Promise from 'bluebird';

import GameSelectOption from '../Game/GameSelectOption';

import CSSModules from 'react-css-modules';
import styles from './style.less';

const games = [
    { id: '1', name: 'Hearthstone', image: 'https://lh6.ggpht.com/J-_wYHXVmR86Mvq6KNHiSvR0T3WH4wHgVC0OLQEIa1FHVbXARD0zafLA8JEUjo-CqDw=w300' },
    { id: '2', name: 'Guilty Gear', image: 'http://icons.iconarchive.com/icons/3xhumed/mega-games-pack-34/256/Guilty-Gear-XX-Reload-2-icon.png' }
];

@observer
@CSSModules(styles)
export default class Home extends React.Component {
    @observable game;

    handleInputChange (name, value) {
        runInAction( () => {
            this[name] = value;
        })
    }

    async loadGames (input) {
        return Promise.delay(600)
            .then( () => ({
                options: games.filter( g => g.name.toLowerCase().indexOf(input) >= 0 )
            }));
    }

    componentDidMount () {
    }

    render () {
        return (
            <div>
                <h4>
                    Trouver une partie
                </h4>

                <div className='col-md-8'>
                    <Select.Async
                        name='game'
                        loadOptions={ this.loadGames }
                        onChange={ this.handleInputChange.bind(this, 'game') }
                        value={ this.game }
                        placeholder='Sélectionnez un jeu'
                        labelKey='name'
                        valueKey='id'
                        optionRenderer={ (option) =>
                            <GameSelectOption
                                game={ option }
                            />
                        }
                        valueRenderer={ (option) =>
                            <GameSelectOption
                                game={ option }
                            />
                        }
                    />
                </div>
            </div>
        )
    }
}
