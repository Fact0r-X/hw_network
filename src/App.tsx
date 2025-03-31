import './App.css';
import Navigation from "./components/Navigation.tsx";
import Body from "./components/Body.tsx";
import {useState} from "react";
import {TwitterContext} from "./utils/context.ts";
import {Stats, User} from "./utils/types";




function App() {
    const [user, setUser] = useState<User>({
        name: 'Robot',
        avatar: 'https://gravatar.com/avatar/000?d=robohash'
    });

    const [stats, setStats] = useState<Stats>({
        followers: 0,
        following: 0
    });

    const changeAvatar = (url: string | null) => {
        setUser(prevState => ({...prevState, avatar: url || prevState.avatar}));
    };

    const changeName = (name: string | null) => {
        setUser(prevState => ({...prevState, name: name || prevState.name}));
    };

    const changeStats = (field: keyof Stats, sum: number) => {
        setStats(prevState => ({
            ...prevState,
            [field]: Math.max(0, prevState[field] + sum)
        }));
    };

    return (
        <div className={`app`}>
            <TwitterContext.Provider value={{
                user,
                stats,
                changeAvatar,
                changeName,
                changeStats
            }}>
                <Navigation/>
                <Body/>
            </TwitterContext.Provider>
        </div>
    );
}

export default App;