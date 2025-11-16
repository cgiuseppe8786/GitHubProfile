import React from "react";
import type { GithubRepo } from "../types/types";
import StarIcon from "../assets/Star.svg";
import NestingIcon from "../assets/Nesting.svg";
import ShieldIcon from "../assets/Chield_alt.svg"; // icona licenza (MIT)

interface RepoCardProps {
    repo: GithubRepo;
}

function formatUpdatedAt(dateString: string): string {
    const updated = new Date(dateString).getTime();
    const diffMs = Date.now() - updated;
    const days = Math.round(diffMs / (1000 * 60 * 60 * 24));

    if (days <= 0) return "updated today";
    if (days === 1) return "updated 1 day ago";
    return `updated ${days} days ago`;
}

const RepoCard: React.FC<RepoCardProps> = ({ repo }) => {
    const licenseName = repo.license?.name ?? "MIT";

    return (
        <a
            href={repo.html_url}
            className="repo-card"
            target="_blank"
            rel="noopener noreferrer"
        >
            {/* titolo */}
            <h3 className="repo-card__title">{repo.name}</h3>

            {/* descrizione */}
            {repo.description && (
                <p className="repo-card__description">{repo.description}</p>
            )}

            {/* footer: MIT + icone + updated */}
            <div className="repo-card__footer">
                <div className="repo-card__meta">
                    <span className="repo-card__meta-item">
                        <img src={ShieldIcon} alt="" />
                        {licenseName}
                    </span>

                    <span className="repo-card__meta-item">
                        <img src={NestingIcon} alt="" />
                        {repo.forks_count}
                    </span>

                    <span className="repo-card__meta-item">
                        <img src={StarIcon} alt="" />
                        {repo.stargazers_count}
                    </span>
                </div>

                <span className="repo-card__updated">
                    {formatUpdatedAt(repo.updated_at)}
                </span>
            </div>
        </a>
    );
};

export default RepoCard;
