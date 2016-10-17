// @flow

import moment from 'moment';
import type { Project, Subproject, Track } from '~/types';

export function formatToHoursMinutes (totalMinutes: number): string {
    let result = '';

    const duration = moment.duration(totalMinutes, 'minutes');
    const hours = duration.hours();
    const minutes = duration.minutes();

    if (hours > 0) {
        result += hours + 'h';
    }

    if (minutes > 0 && minutes < 10) {
        result += '0';
    }

    if (minutes > 0) {
        result += minutes;
    }

    if (hours === 0 && minutes > 0) {
        result += 'min';
    }

    return result;
};

export function formatPercent (number: number, precision?: number): string {
    return (number * 100).toFixed(precision || 0);
};

export function makeProjectUrl (project?: Project, subproject?: Subproject, track?: Track): string {
    const projectUrl = project ? `/projects/${ project.id }/${ project.slug }` : '';
    const subprojectUrl = subproject ? `/subprojects/${ subproject.id }/${ subproject.slug }` : '';
    const trackUrl = track ?  `/tracks/${ track.id }/${ track.slug }` : '';

    return `${ projectUrl }${ subprojectUrl }${ trackUrl }`;
}
