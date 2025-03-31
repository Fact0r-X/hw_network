import Stats from "../components/Stats.tsx";

export interface TwitterContextType {
    user: User;
    stats: Stats;
    changeAvatar: (url: string | null) => void;
    changeName: (name: string | null) => void;
    changeStats: (field: keyof Stats, sum: number) => void;
}

export interface User {
    name: string;
    avatar: string;
}

export interface Stats {
    followers: number;
    following: number;
}