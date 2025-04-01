export interface User {
    name: string;
    avatar: string;
}

export interface Stats {
    followers: number;
    following: number;
}

export type StatsType = keyof Stats;

export interface TwitterContextValue {
    user: User,
    stats: Stats,
    changeAvatar: (url: string) => void,
    changeName: (name: string) => void,
    changeStats: (field: StatsType, sum: number) => void;
}