/* @flow */

export type Platform = {
    id: string,
    name: string,
};

export type MenuEntry = {
    label: string,
    link: string,
};

export type User = {
    id: string,
    name: string,
    avatar: {
        secure_url: string
    }
};

export type Game = {
    name: string,
    genres: Array<string>
}

export type Review = {
    game: Game,
    author: User,
    publishedAt: Date
}
