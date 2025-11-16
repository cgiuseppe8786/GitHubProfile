import React from "react";
import RepoCard from "./RepoCard";
import type { GithubRepo } from "../types/types";

interface RepoListProps {
    repos: GithubRepo[];
    username: string;
}

const RepoList: React.FC<RepoListProps> = ({ repos, username }) => {
    if (!repos.length) {
        return (
            <p className="repos__empty">
                This user has no public repositories yet.
            </p>
        );
    }

    const topRepos = repos.slice(0, 4);

    return (
        <section className="repos">
            <div className="repos__grid">
                {topRepos.map((repo) => (
                    <RepoCard key={repo.id} repo={repo} />
                ))}
            </div>

            <div className="repos__all">
                <a
                    href={`https://github.com/${username}?tab=repositories`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View all repositories
                </a>
            </div>
        </section>
    );
};

export default RepoList;
