import React from "react";
import type { GithubUser } from "../types/types";
import AvatarFallback from "../assets/Chield_alt.svg";

interface ProfileHeaderProps {
    user: GithubUser;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ user }) => {
    const displayName = user.name || user.login;

    return (
        <header className="profile">
            {/* Riga alta: avatar + pill */}
            <div className="profile__top">
                <div className="profile__avatar-wrapper">
                    <img
                        src={user.avatar_url || AvatarFallback}
                        onError={(e) => {
                            (e.currentTarget as HTMLImageElement).src = AvatarFallback;
                        }}
                        alt={`${displayName} avatar`}
                        className="profile__avatar"
                    />
                </div>

                <div className="profile__stats">
                    <div className="stat stat--pill">
                        <span className="stat__label">Followers</span>
                        <span className="stat__divider" />
                        <span className="stat__value">{user.followers}</span>
                    </div>

                    <div className="stat stat--pill">
                        <span className="stat__label">Following</span>
                        <span className="stat__divider" />
                        <span className="stat__value">{user.following}</span>
                    </div>

                    <div className="stat stat--pill stat--location">
                        <span className="stat__label">Location</span>
                        <span className="stat__divider" />
                        <span className="stat__value">
                            {user.location || "San Francisco, CA"}
                        </span>
                    </div>
                </div>
            </div>

            {/* Riga sotto: nome + bio allineati sotto l’avatar */}
            <div className="profile__info">
                <h1 className="profile__name">{displayName}</h1>
                <p className="profile__bio">
                    {user.bio || "How people build software."}
                </p>
            </div>
        </header>
    );
};

export default ProfileHeader;
