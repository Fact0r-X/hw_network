import Avatar from "./Avatar.tsx";
import { useContext } from "react";
import { TwitterContext } from "../utils/context.ts";
import {TwitterContextType} from "../utils/types";



const Stats = () => {
    const context = useContext(TwitterContext) as TwitterContextType;

    if (!context) {
        throw new Error("Stats must be used within a TwitterContext.Provider");
    }

    const { user, stats, changeStats } = context;

    return (
        <div className={`user-stats`}>
            <div>
                <Avatar />
                {user.name}
            </div>

            <div className={`stats`}>
                <div
                    onClick={() => changeStats('followers', 1)}
                    onContextMenu={e => {
                        e.preventDefault();
                        changeStats('followers', -1);
                    }}
                >
                    Followers: {stats.followers}
                </div>

                <div
                    onClick={() => changeStats('following', 1)}
                    onContextMenu={e => {
                        e.preventDefault();
                        changeStats('following', -1);
                    }}
                >
                    Following: {stats.following}
                </div>
            </div>
        </div>
    );
};

export default Stats;
