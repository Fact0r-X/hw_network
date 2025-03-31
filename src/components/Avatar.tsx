import {useContext} from "react";
import {TwitterContext} from "../utils/context.ts";
import {TwitterContextType} from "../utils/types";


interface Props {
    size?: string;
}

const Avatar = ({ size }: Props) => {
    const context = useContext(TwitterContext) as TwitterContextType;

    if (!context) {
        throw new Error("Avatar must be used within a TwitterContext.Provider");
    }

    const { user, changeAvatar, changeName } = context;

    return (
        <img
            onClick={() => {
                const url = prompt('Enter image url');
                changeAvatar(url);
            }}
            onContextMenu={e => {
                e.preventDefault();
                const name = prompt('Enter name');
                changeName(name);
            }}
            className={`user-avatar ${size || ''}`}
            src={user.avatar}
            alt={user.name}
        />
    );
};

export default Avatar;