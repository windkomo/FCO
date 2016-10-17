/* @flow */

import { extendObservable, observable, computed, action, autorun } from 'mobx';
import storage from '~/libs/storage';

class UIStore {
    @observable isLoading: boolean;
    @observable isMenuManuallyMinimized: boolean;
    @observable isMenuManuallyMaximized: boolean;
    @observable isMessagingVisible: boolean;
    @observable windowDimensions: Object;

    constructor() {
        extendObservable(this, this.load());

        this.persist();
    }

    @computed get isMenuMaximized(): boolean {
        if (this.windowDimensions && this.windowDimensions.width > 1200) {
            return !this.isMenuManuallyMinimized;
        }

        return this.isMenuManuallyMaximized;
    }

    @action setIsLoading(isLoading: boolean) {
        this.isLoading = isLoading;
    }

    @action toggleMenu() {
        this.isMenuManuallyMinimized = !this.isMenuManuallyMinimized;
        this.isMenuManuallyMaximized = !this.isMenuManuallyMaximized;
    }

    @action toggleMessaging() {
        this.isMessagingVisible = !this.isMessagingVisible;
    }

    @action updateDimensions(windowObject: Object) {
        this.windowDimensions = {
            width: windowObject.innerWidth,
            height: windowObject.innerHeight
        };

        if (this.windowDimensions.width > 1200) {
            this.isMenuManuallyMaximized = false;
        }
    }

    load() {
        return Object.assign({
            isLoading: false,
            isMenuManuallyMinimized: false,
            isMenuManuallyMaximized: false,
            isMessagingVisible: false
        }, storage.get('UIStore'));
    }

    persist() {
        autorun('persist', () => {
            storage.set('UIStore', {
                isMenuManuallyMinimized: this.isMenuManuallyMinimized,
                isMenuManuallyMaximized: this.isMenuManuallyMaximized,
                isMessagingVisible: this.isMessagingVisible
            });
        });
    }
}

export default new UIStore();
