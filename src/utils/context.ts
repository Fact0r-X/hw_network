import {createContext} from "react";
import {StatsType, TwitterContextValue} from "./types";

export const TwitterContext = createContext<TwitterContextValue>({
    user: {
        name: 'Robot',
        avatar: 'https://gravatar.com/avatar/000?d=robohash'
    },
    stats: {
        followers: 0,
        following: 0
    },
    changeAvatar: (url: string) => {console.log(url);},
    changeName: (name: string) => {console.log(name)},
    changeStats: (statsType: StatsType, sum: number) => {console.log(statsType, sum);}
});